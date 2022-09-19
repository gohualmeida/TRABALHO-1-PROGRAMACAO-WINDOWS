import './CampoTexto.css'
import React, { useState } from 'react'
 
function Example(){
    const[contador, countSet] = useState(0)
 
    return(
        <div className='campo-texto'>
            <p>voce clicou {contador}</p>
            <button onClick={() => countSet(contador + 1)}></button>
        </div>
    )
}

const CampoTexto = () => {
    return (    
        <div className='campo-texto'>
            <h1>ALUNO</h1>
            <label>Nome do aluno:</label>
            <input placeholder='Digite a descrição'/>
            <label>E-mail do aluno:</label>
            <input placeholder='Digite a duração'/>
            <button>OK {Example()}</button>
        </div>
    )
}

export default CampoTexto