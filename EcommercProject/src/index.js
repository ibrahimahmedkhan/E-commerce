import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import './index.css';

import App from './App'; 
import SignUp from './SignUp';
import Login from './Login';
import Catalogue from './Catalogue';
import Crud from './Crud';
import Admin from './Admin';
import Cart from './Cart';
import Suppliers from './Suppliers';
import reportWebVitals from './reportWebVitals';
import ConfirmOrder from './ConfirmOrder';
import Sports from './Categories/Sports';
import Housing from './Categories/Housing';
import Accessories from './Categories/Accessories';
import Clothes from './Categories/Clothes';
import Gaming from './Categories/Gaming';
import Electronics from './Categories/Electronics';
ReactDOM.render(
  // <App/>,
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<App />} />
      <Route path="SignUp" element={<SignUp />} /> 
      <Route path="Login" element={<Login />} />  
      <Route path="Catalogue" element={<Catalogue />} /> 
      <Route path="Crud" element={<Crud />} /> 
      <Route path="Admin" element={<Admin />} /> 
      <Route path="Cart" element={<Cart />} /> 
      <Route path="Suppliers" element={<Suppliers />} /> 
      <Route path="ConfirmOrder" element={<ConfirmOrder />} /> 
      <Route path="Sports" element={<Sports />} /> 
      <Route path="Housing" element={<Housing />} /> 
      <Route path="Accessories" element={<Accessories />} /> 
      <Route path="Clothes" element={<Clothes />} /> 
      <Route path="Gaming" element={<Gaming />} /> 
      <Route path="Electronics" element={<Electronics />} /> 
      
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// select * from products 
// where productId = {prodid}