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
            <h1>FICHA</h1>
            <label>Descrição:</label>
            <input placeholder='Digite a descrição'/>
            <label>Duração:</label>
            <input placeholder='Digite a duração'/>
            <button>OK {Example()}</button>
        </div>
    )
}
 
export default CampoTexto