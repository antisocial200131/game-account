import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login/Login';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Sellers from './Pages/DashBoard/Sellers/Sellers';
import { SellersSearch } from './Pages/DashBoard/Sellers/SellersSearch/SellersSearch';


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/sellers' element={<Sellers />} />
          <Route path='/sellers_search' element={<SellersSearch />} />
        </Routes>
      </div>
    </>
  );

}

export default App;