import './TelaInicial.css';




const TelaInicial = ({StartGame}) => {
  return (
    <div className='start'>
        <h1>Palavra Secreta</h1>
        <button onClick={StartGame} className='button'>Start</button>
    </div>
  )
}

export default TelaInicial