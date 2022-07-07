import './App.css';

//components
import TelaInicial from './componente/TelaInicial';
import Game from './componente/Game';
import GameOver from './componente/GameOver';

//React 
import { useCallback, useEffect, useState } from 'react';

//Data
import { words, wordsList } from './data/words'

//Array de estágios do jogo
const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]


function App() {

  //método para capturar e mudar o estado do estágios
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //métodos para resgatar a escolha das palavras, categorias e letras
  const [escolhaPalavra, setEscolhaPalavra] = useState('');
  const [escolhaCategoria, setEscolhaCategoria] = useState('');
  const [escolhaLetra, setEscolhaLetra] = useState([]);

  const [letrasCertas, setLetrasCertas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, settentativas] = useState(3);
  const [pontuacao, setPontuacao] = useState(0);



  //Escolhendo aleatóriamente a palavra e categoria
  const EscolhaCategoriaEPalavra = () => {

    //escolha aleatória da categoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //escolha da palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category }

  }

  //Iniciar o jogo
  const StartGame = () => {

    //escolha da palavra e categoria 
    const { word, category } = EscolhaCategoriaEPalavra();

    //criar o array de letras com a palavra
    let arrLetras = word.split('');
    arrLetras = arrLetras.map((l) => l.toLowerCase());

    setGameStage(stages[1].name)

    console.log(word, category)
    console.log(arrLetras)

    //setando os stados 
    setEscolhaPalavra(word);
    setEscolhaCategoria(category);
    setEscolhaLetra(arrLetras);
  }

  //processar o input de letras 
  const verificarLetras = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    //checar se as letras já foram usadas 
    if (
      letrasCertas.includes(normalizedLetter) ||
      letrasErradas.includes(normalizedLetter)
    ) {
      return;
    }

    //pegando as letras certas e erradas
    if(escolhaLetra.includes(normalizedLetter)) {
      setLetrasCertas((actualLetrasCertas) => [
        ...actualLetrasCertas, 
        letter,
      ]);
    } else {
      setLetrasErradas((actualLetrasErradas) => [
        ...actualLetrasErradas, 
        normalizedLetter,
      ]);
    }

  };

  //Volta o jogo do inicio e reseta tudo
  const resetarJogo = () => {
    setGameStage(stages[0].name);
  }


  return (
    <div className="App">

      {/* Setando os estágios  */}
      {gameStage === 'start' && <TelaInicial StartGame={StartGame} />}
      {gameStage === 'game' &&
        <Game
          verificarLetras={verificarLetras}
          escolhaPalavra={escolhaPalavra}
          escolhaCategoria={escolhaCategoria}
          escolhaLetra={escolhaLetra}
          letrasCertas={letrasCertas}
          letrasErradas={letrasErradas}
          tentativas={tentativas}
          pontuacao={pontuacao}
        />}
      {gameStage === 'end' && <GameOver resetarJogo={resetarJogo} />}

    </div>
  );
}

export default App;
