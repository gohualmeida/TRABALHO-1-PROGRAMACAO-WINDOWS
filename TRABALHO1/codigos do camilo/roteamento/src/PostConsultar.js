import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PostConsultar = () => {
    const [estado, setEstado] = useState(
        {
            carregado: false, 
            dados: null
        });

    const {id} = useParams();

    const atualizar = () => {

        if (estado.carregado) { 
            return; 
        }

        axios.get(`http://localhost:3004/posts/${id}`)
        .then(resp => {
            setEstado(
                {carregado: true, dados: resp.data}
            )
        }).catch(erro => {
            console.log(erro);
        });
    };

    useEffect(() => atualizar());

    if (!estado.carregado) {
        return <div>Carregando...</div>;
    }

    return <div>
        <p>Título: <strong>{estado.dados.title}</strong></p>
        <p>Autor: <strong>{estado.dados.author}</strong></p>
    </div>;
};

export default PostConsultar;