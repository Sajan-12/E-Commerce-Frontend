import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import SignupLogin from './pages/SignupLogin';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import mens_banner from "./components/Assets/Frontend_Assets/banner_mens.png";
import women_banner from "./components/Assets/Frontend_Assets/banner_women.png";
import kids_banner from "./components/Assets/Frontend_Assets/banner_kids.png"


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/men' element={<ShopCategory banner={mens_banner} category={"Men"}/>}></Route>
      <Route path='/women' element={<ShopCategory banner={women_banner} category={"Women"}/>}></Route>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category={"kid"}/>}></Route>
      <Route path="/product/:productId" element={<Product/>} />

      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<SignupLogin/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
