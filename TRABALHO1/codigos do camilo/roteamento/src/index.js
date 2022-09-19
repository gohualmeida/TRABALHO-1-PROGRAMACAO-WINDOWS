import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import Layout from './Layout';
import NotFound from './NotFound';
import Tabela from './Tabela';
import PostListar from './PostListar';
import PostConsultar from './PostConsultar';

//npm install react-router-dom

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='pagina1' element={<Pagina1 mensagem="Mensagem personalizada aqui." />} />
                    <Route path='pagina2' element={<Pagina2 />} />
                    <Route path='tabela' element={<Tabela />} />
                    <Route path='posts' exact element={<PostListar />} />
                    <Route path='posts/consultar/:id' exact element={<PostConsultar />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const root = createRoot(document.querySelector("#root"));

root.render(<App />);

