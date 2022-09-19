import React from 'react';
import { createRoot } from 'react-dom/client';
import Feed from './Feed';
import Cliques from './Cliques';
import Contato from './Contato';

const root = createRoot(document.querySelector("#root"));

const App = () => {
    return <Contato />;
    //return <div><Feed /></div>;
    //return <div><Cliques /></div>;
};

root.render(<App />);