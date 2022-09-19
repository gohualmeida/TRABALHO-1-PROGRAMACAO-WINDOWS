import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostListar = () => {

    const [estado, setEstado] = useState(
        {
            carregado: false, 
            dados: []
        });

    const atualizar = () => {

        if (estado.carregado) { 
            return; 
        }

        axios.get('http://localhost:3004/posts')
        .then(resp => {
            setEstado(
                {carregado: true, dados: resp.data}
            )
        }).catch(erro => {
            console.log(erro);
        });
    };

    const inserir = () => {
        axios.post('http://localhost:3004/posts', {
            title: 'Título de testes 2',
            author: 'José'
        })
        .then(resp => {
            console.log(resp);
        }).catch(erro => {
            console.log(erro);
        });
    };

    const alterar = () => {
        const id = 2;
        axios.put(`http://localhost:3004/posts/${id}`, {
            id: 2,
            title: 'Título Alterado',
            author: 'Ana'
        })
        .then(resp => {
            console.log(resp);
        }).catch(erro => {
            console.log(erro);
        });
    };

    const excluir = () => {
        const id = 3;
        axios.delete(`http://localhost:3004/posts/${id}`)
        .then(resp => {
            console.log(resp);
        }).catch(erro => {
            console.log(erro);
        });
    };

    useEffect(() => atualizar());

    return (
        <div>
            <div>
                <button onClick={() => inserir()}>Insere um registro</button>
                <button onClick={() => alterar()}>Altera um registro</button>
                <button onClick={() => excluir()}>Apaga um registro</button>
            </div>
            <table className="ui table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        estado.dados.map(x => 
                            (<tr key={x.id}>
                                <td>{x.title}</td>
                                <td>{x.author}</td>
                                <td>
                                    <Link 
                                        to={`/posts/consultar/${x.id}`}>
                                            Consultar
                                    </Link>
                                </td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PostListar;