const Tabela = () => {
    return (
        <table className="ui table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                {
                    dados.map(x => 
                        (<tr key={x.id}>
                            <td>{x.nome}</td>
                            <td>{x.email}</td>
                        </tr>)
                    )
                }
            </tbody>
        </table>
    );
};

const dados = [
  { id: 1, nome: 'Ana', email: 'ana@email.com' },  
  { id: 2, nome: 'Bruno', email: 'bruno@email.com' },
  { id: 3, nome: 'Carlos', email: 'carlos@email.com' },
  { id: 4, nome: 'Daniela', email: 'daniela@email.com' }
];

export default Tabela;
