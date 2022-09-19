import './CampoTexto.css'

const CampoTexto = () => {
    return (
        <div className='campo-texto'>
            <h1>FICHA</h1>
            <label>Descrição:</label>
            <input placeholder='Digite a descrição'/>
            <label>Duração:</label>
            <input placeholder='Digite a duração'/>
        </div>
    )
}

export default CampoTexto