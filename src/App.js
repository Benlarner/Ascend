import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/HomePage/Home";
// import Products from "./Components/Products/Products";
// import ProductPage from "./Components/ProductPage/ProductPage";
import Contact from "./Components/Contact/Contact";
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import ResultsContainer from "./Components/Products/ResultsContainer";
import Try from "./Components/Try/Try";


function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/Products" component={Products} /> */}
        {/* <Route exact path="/ProductPage" component={ProductPage} /> */}
        <Route path="/Results" render={() => <ResultsContainer />} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Cart" component={ShoppingCart} />
        <Route exact path = "/Try" component = {Try} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
