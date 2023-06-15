import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Header } from './components/Header/Header';
import { ServiceClient } from './pages/ServiceClient/ServiceClient';
import { Footer } from './components/Footer/Footer';
import { Authentification } from './pages/Authentication/Authentication';
import { Cart } from './pages/Cart/Cart';
import { HomePage } from './pages/HomePage/HomePage';
import { Articles } from './components/Articles/Articles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Header></Header>
  <main>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/foot' element={<Footer/>}></Route>
      <Route path='/Authentification' element={<Authentification/>}></Route>
      <Route path='/Cart'element={<Cart/>}></Route>
      <Route path='/accueil'element={<HomePage/>}></Route>
      <Route path='/sav' element={<ServiceClient/>}></Route>
      <Route path='articles'element={<Articles/>}></Route>
    </Routes>
  </main>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
