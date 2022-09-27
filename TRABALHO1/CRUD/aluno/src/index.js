import React from 'react';
import ReactDOM from 'react-dom/client';
import CampoTextoAluno from './Aluno/CampoTextoAluno';
import CampoTextoFicha from './Ficha/CampoTextoFicha';
import Botao from './Botao/Botao.js';
import './Formulario/Formulario.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaLista from './PaginaLista';
import Formulario from './Formulario/Formulario'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Formulario/>

    <section className='formulario'>
      <form>
          <CampoTextoAluno />
          <CampoTextoFicha />
          <Botao/>
      
          {/* <Routes>
            <Route path='PaginaLista' element={<PaginaLista mensagem="Mensagem personalizada aqui." />} />
          </Routes> */}
      </form>


    </section>
  </React.StrictMode>

);



