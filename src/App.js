import React from "react";
import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import CheckOut from "./component/CheckOut";
import SingIn from "./component/SingIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<><Header/>
      <Home/> </> }>
       
        </Route>
        <Route path="/login" element=   { <><Header/><SingIn/> </>}>
       
        </Route>
        <Route path="/checkout" element=   { <><Header/>
        <CheckOut/> </>}>
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
