import './GameOver.css';

const GameOver = ({resetarJogo}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button className="button" onClick={resetarJogo}> Início </button>
    </div>
  )
}

export default GameOver