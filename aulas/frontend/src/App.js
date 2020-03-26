import React from 'react';

import './global.css'

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;

/**
 * Componente: no react é uma função que retorna html
 * JSx (JavaScript XML): Xml é a sintaxe do Html, jsx é o html que esta escrito no arquivo javascript
 * ********Propriedades: no react, são como os atributos do html,**********
 * Componentes sempre tem que começar com letra maisucula, exemplo: Header.js
 * Estado: Informação que será mantida pelo componente, exemplo input ou lista de usuarios
 * Estado retorna um Array [valor, funcaoDeAtualizacao]
 * 
 * react icons - icones 
 * react router dom - rotas
 * axios - conexao com banco de dados
 */