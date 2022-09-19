import React, {useState} from 'react';

const Contato = () => {
    const [objeto, setObjeto] = useState(
        {
            nome: 'Ana', 
            email: 'ana@email.com'
        });

    const alterarPropriedade = (propNome, propValor) => {
        let novoObjeto = {...objeto};

        novoObjeto[propNome] = propValor;
        
        setObjeto(novoObjeto);
    };

    return (
        <div>
            <label htmlFor="nome">Nome</label>
            <input 
                id="nome" 
                type="text" 
                value={objeto.nome}
                onChange={(e) => {
                    alterarPropriedade(e.target.id, 
                        e.target.value)
                    }
                }
            />
            <input 
                id="email" 
                type="email" 
                value={objeto.email}
                onChange={(e) => {
                    alterarPropriedade(e.target.id, 
                        e.target.value)
                    }
                }
            />
            <div>
                <h4>{objeto.nome}</h4>
                <h4>{objeto.email}</h4>
            </div>
        </div>
    );
};

export default Contato;