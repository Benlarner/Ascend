import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/HomePage/Home";
import Products from "./Components/Products/Products";
import ProductPage from "./Components/ProductPage/ProductPage";
import Contact from "./Components/Contact/Contact";
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/ProductPage" component={ProductPage} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Cart" component={ShoppingCart} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
