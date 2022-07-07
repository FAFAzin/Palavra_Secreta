import './GameOver.css';

const GameOver = ({resetarJogo, pontuacao}) => {
  return (
    <div>
      <h1>Fim do Jogo</h1>
      <h2>
        A sua pontuação foi: <span>{pontuacao}</span>
      </h2>
      <button className="button" onClick={resetarJogo}> Início </button>
    </div>
  )
}

export default GameOver