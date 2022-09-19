import React from "react";
import axios from 'axios';

class Evento extends React.Component {
    render() {

        const obj = this.props.objeto;

        return (
            <div className="event">
                <div className="label">
                <img  alt="imagem aqui" src={obj.imagem} />
                </div>
                <div className="content">
                <div className="summary">
                    <a className="user" href="https://google.com.br">
                    {obj.usuario}
                    </a> {obj.acao}
                    <div className="date">
                    {obj.tempo}
                    </div>
                </div>
                <div className="meta">
                    <a className="like" href={obj.link}>
                    <i className="like icon" onClick={this.atualizarLikes}></i> 
                        {obj.numeroLikes} Likes
                    </a>
                </div>
                </div>
            </div>
        );
    }

    atualizarLikes = (e) => {
        e.preventDefault();

        const obj = {...this.props.objeto, 
            numeroLikes: this.props.objeto.numeroLikes + 1};

        axios.put(`http://localhost:3004/feeds/${this.props.objeto.id}`, 
            obj
        ).then((resp) => this.props.atualizar());
    };

};

export default Evento;