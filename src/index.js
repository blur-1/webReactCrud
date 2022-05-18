import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mainbar from './common/Mainbar';
import Footer from './common/Footer';
import Categorias from './components/Categorias';
import Pedidos from './components/Pedidos';
import Productos from './components/Productos';
import Contacto from './components/Contacto';

ReactDOM.render(
  <BrowserRouter>
  <Mainbar/>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='webReactCrud' element={<App/>}/>
    <Route path='categorias' element={<Categorias/>}/>
    <Route path='pedidos' element={<Pedidos/>}/>
    <Route path='productos' element={<Productos/>}/>
    <Route path='contacto' element={<Contacto/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
