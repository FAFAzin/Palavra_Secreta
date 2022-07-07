import './Game.css';

import { useState, useRef } from 'react';

const Game = ({ verificarLetras, 
  escolhaPalavra, 
  escolhaCategoria, 
  escolhaLetra, 
  letrasCertas, 
  letrasErradas, 
  tentativas, 
  pontuacao }) => {

    const [letter, setLetter] = useState('');
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();

      verificarLetras(letter);

      setLetter('')

      letterInputRef.current.focus();
    }

  return (
    <div className="game">
      <p className="pontos">
        <span>Pontos: {pontuacao}</span>
      </p>
      <h2>Adivinhe a Palavra</h2>
      <h3 className="tip">
        Dica da palavra: <span> {escolhaCategoria}</span>
      </h3>
      <p>Suas tentativas: {tentativas} </p>
      <div className="palavraContainer">
        {escolhaLetra.map((letra, i) => 
        letrasCertas.includes(letra) ? (
          <span key={i} className = 'letra'>
            {letra}
          </span>
        ) : (
          <span key={i} className='blankSquare'></span>
        ))}
      </div>
      <div className="letrasContainer">
        <p>Adivinhe a palavras</p>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name='letter' 
          maxLength='1' 
          required 
          onChange={(e) => setLetter(e.target.value)} 
          value = {letter}
          ref={letterInputRef}/>
          <button className="button">Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>letras já utilizadas: </p>
        {letrasErradas.map((letra, i) => (
          <span key={i}> {letra}, </span>
        ))}
        
      </div>
    </div>
  )
}

export default Game