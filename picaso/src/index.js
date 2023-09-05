import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';
import './modules/styles/global.css';

import './modules/styles/navbar.css';
import './modules/styles/container.css';
import './modules/styles/form.css';
import './modules/styles/button.css';
import './modules/styles/product.css';
import './modules/styles/typography.css';

import Home_Index from './pages/home/index';
import Table_Index from './pages/table/index';
import Create_Index from './pages/create';
import Edit_Index from './pages/edit';
import Login_Index from './pages/login';
import Register_Index from './pages/register';
import Product_Index from './pages/products';
import Detail_Index from './pages/detail';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Index />}></Route>
          <Route path="table" element={<Table_Index />}></Route>
          <Route path="create" element={<Create_Index />}></Route>
          <Route path="login" element={<Login_Index />}></Route>
          <Route path="products" element={<Product_Index />}></Route>
          <Route path="register" element={<Register_Index />}></Route>
          <Route path="detail/:id" element={<Detail_Index />}></Route>
          <Route path="edit/:id" element={<Edit_Index />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
