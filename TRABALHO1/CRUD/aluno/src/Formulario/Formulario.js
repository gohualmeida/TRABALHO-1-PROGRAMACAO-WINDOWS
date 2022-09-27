
import React from 'react'
import axios from 'axios';

class Formulario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nome: '' , email : '', descricao:'', duracao: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target ;
        const name = target.name;
        const value = target.value;

      this.setState({   [name]: value});
    }

  
    handleSubmit(event) {
      // alert('Nome : ' + this.state.nome +"\n Email : " + this.state.email
      // + "\n Descricao : " + this.state.descricao + "\n Duração : " + this.state.duracao);
      
      
      const dados = this.state;
      axios.put('http://localhost:4000/dadosFormulario/1', dados)
          .then(response => 
            {if (JSON.stringify(response.status) == 200) { alert("ok" )} else {alert("erro")}
            
    }     );
  
      
      event.preventDefault();



    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <br/>

          <label>Descrição:</label>
          <input type="text" name="descricao" value={this.state.descricao} onChange={this.handleChange} />
            <br/>
            <label>Duração:</label>
            <input type="text" name="duracao" value={this.state.duracao} onChange={this.handleChange} />
            <br/>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
  }


  export default Formulario