import React, { useState } from 'react'

import './styles/global.css'
//import Button from './components/Button';
import Navbar from './components/Navbar';
//import Home from './pages/Home';
import Header from './components/Header';

/* [COMENTÁRIOS AUXILIARES]

-> {{ ... }} style direto no elemento

-> PROPS: title='Clique aqui' é o conteúdo do botão como foi definido do componente Button
 e o type='button' (e outras propriedades) fazem parte do ...rest 

-> STATE: count é a variável e setCount a função que manipula count
  
*/

function App() {

  return (
    <>
      <Header />
      <Navbar />
    </>
  );
}

export default App;
