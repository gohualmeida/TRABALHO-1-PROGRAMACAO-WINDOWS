import React, {useEffect, useState} from 'react';

//Hooks

const Cliques = () => {
    const [nrCliques, setNrCliques] = useState(0);

    useEffect(() => {
        document.title = `${nrCliques} cliques`;
    });

    return (<div>
        <button onClick={() => setNrCliques(nrCliques + 1)}>
            Clique aqui...
        </button>
        <p>{nrCliques} cliques.</p>
    </div>);
};
/*
class Cliques extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numeroCliques: 0};
    }
    render() {
        return (<div>
            <p>Número de cliques: {this.state.numeroCliques}</p>
            <button onClick={() => { this.setState( {numeroCliques: this.state.numeroCliques + 1} )}}>
                Clique aqui...
            </button>
        </div>);
    }
}
*/

export default Cliques;