import './CampoTextoFicha.css'
import React, { useState } from 'react'
 
// function Example(){
//     const[contador, countSet] = useState(0)
 
//     return(
//         <div className='campo-texto'>
//             <p>voce clicou {contador}</p>
//             <button onClick={() => countSet(contador + 1)}></button>
//         </div>
//     )
// }

const CampoTextoFicha = () => {
    return (
        <div className='campo-texto'>
            <h1>FICHA</h1>
            <label>Descrição:</label>
            <input/>
            <label>Duração:</label>
            <input/>
            {/* <button>OK {Example()}</button> */}
        </div>
    )
}

export default CampoTextoFicha