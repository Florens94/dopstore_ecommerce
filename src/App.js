import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import {BrowserRouter} from "react-router-dom"
import Routes from './components/Routes/Routes';
import {CartProvider} from './Context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes/>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
