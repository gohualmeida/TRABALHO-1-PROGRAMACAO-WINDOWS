import './CampoTextoAluno.css'
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

const CampoTextoAluno = (dataEdit) => {
    const [nome, setName] = useState(dataEdit.name || "");
    const [email, setEmail] = useState(dataEdit.email || "");
    const handleSave  = () => {
        if (!nome || !email) return ('Preencha')
    }
    handleSave();
    return (
        <div className='campo-texto'>
            <h1>ALUNO</h1>
            <label>Nome do aluno:</label>
            <input type={nome}
                        value={nome}
                        onChange={(e) => setName(e.target.value)}/>
            <label>E-mail do aluno:</label>
            <input type={email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
        </div>

    )
}

export default CampoTextoAluno