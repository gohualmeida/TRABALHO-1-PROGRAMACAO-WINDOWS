import React, {useEffect, useState} from 'react';
import Evento from './Evento';
import axios from 'axios';
//npm install axios
const Feed = () => {
    const [state, setState] = useState({
        carregando: true,
        eventos: [],
        msgErro: ''
    });
    
    const atualizar = () => {
        axios.get('http://localhost:3004/feeds')
        .then(resp => {
            setState(
                {carregando: false, eventos: resp.data, msgErro: ''}
            )
        }).catch(erro => {
            setState({carregando: false, eventos: [], msgErro: erro.message});
        });
    };

    useEffect(() => atualizar(), [state.carregando]);
    
    if (state.carregando) {
        return <div>Carregando...</div>;
    } else {
        const componentesEventos = state.eventos.map(x => 
            (<Evento
                key={x.id}
                objeto={x}
                atualizar={atualizar} 
            />)
        );

        const msgErro = state.msgErro ?
            (<div className='ui red message'>
                {state.msgErro}
            </div>) : null;

        return (
            <div className="ui feed">
                { msgErro }
                { componentesEventos }
            </div>
        );
    }
}


/*
const eventosConst = [
    {
        usuario:"Ana",
        numeroLikes:"10", 
        imagem:"https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg", 
        acao:"Adicionou você como amigo(a).", 
        tempo:"há 2 dias", 
        link:"https://google.com.br" 
    },
    {
        usuario:"Bruno",
        numeroLikes:"5", 
        imagem:"https://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg", 
        acao:"Adicionou você como amigo(a).", 
        tempo:"há 1 dia", 
        link:"https://google.com.br" 
    },
    {
        usuario:"Carlos",
        numeroLikes:"5", 
        imagem:"https://thumbs.dreamstime.com/z/imagem-do-perfil-do-homem-34444437.jpg", 
        acao:"Reagiu à sua publicação.", 
        tempo:"há 2 minutos",
        link:"https://google.com.br" 
    }
];
*/

export default Feed;
