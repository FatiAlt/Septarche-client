import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Header } from './components/Header/Header';
import { ServiceClient } from './pages/ServiceClient/ServiceClient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Header></Header>
  <main>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/sav' element={<ServiceClient/>}></Route>
    </Routes>
  </main>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
