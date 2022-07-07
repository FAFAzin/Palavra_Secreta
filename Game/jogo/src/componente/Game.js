import './Game.css';

const Game = ({verificarLetras}) => {
  return (
    <div>
      <h1>game</h1>
      <button className='button' onClick={verificarLetras}>Finalizar</button>
    </div>
  )
}

export default Game