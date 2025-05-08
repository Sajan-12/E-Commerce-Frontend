import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router';
import ShopContextProvider, { ShopContext } from './Context/ShopContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ShopContextProvider>
       <App />
    </ShopContextProvider>
    </BrowserRouter>
   
);


