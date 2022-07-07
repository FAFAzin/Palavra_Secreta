import './Game.css';

const Game = ({verificarLetras}) => {
  return (
  <div className="game">
    <p className="pontos">
      <span>Pontos: 000 </span>
    </p>
    <h2>Adivinhe a Palavra</h2>
    <h3 className="tip">
      Dica da palavra: <span> Dica...</span>
    </h3>
    <div className="palavraContainer">
      <span className="letras">A</span>
      <span className="blankSquare"></span>
    </div>
    <div className="letrasContainer">
      <p>Adivinhe a palavras</p>
      <form>
      <input type="text" name='letter' maxLength='1' required/>
      <button className="button">Jogar</button>
      </form>
    </div>
    <div className="wrongLettersContainer">
      <p>letras já utilizadas: </p>
      <span>a, </span>
      <span>b, </span>
    </div>
  </div>
  )
}

export default Game