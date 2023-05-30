import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Header } from './components/Header/Header';
import { ServiceClient } from './pages/ServiceClient/ServiceClient';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { Authentification } from './pages/Authentication/Authentication';
import { Cart } from './pages/Cart/Cart';
import { HomePage } from './pages/HomePage/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Header></Header>
  <main>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/foot' element={<Footer/>}></Route>
      <Route path='/navigator' element={<Navigation/>}></Route>
      <Route path='/Authentification' element={<Authentification/>}></Route>
      <Route path='Cart'element={<Cart/>}></Route>
      <Route path='Page accueil'element={<HomePage/>}></Route>
      <Route path='/sav' element={<ServiceClient/>}></Route>
    </Routes>
  </main>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
