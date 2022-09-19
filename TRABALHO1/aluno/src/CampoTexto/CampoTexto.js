import './CampoTexto.css'

const CampoTexto = () => {
    return (
        <div className="campo-texto">
            <h1>ALUNO</h1>
            <label>Nome Aluno:</label>
            <input placeholder='Digite o nome'/>
            <label>E-mail Aluno:</label>
            <input placeholder='Digite o e-mail'/>
        </div>
    )
}

export default CampoTexto