import { Component, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart_Page/cart";
import Category from "./pages/category_Page/category";
import Product from "./pages/product_Page/product";
import { path } from "./routes";
import Card from "./components/Card/Card";


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/product'>
            
          </Link>
          <Link to='/cart'></Link>
        </div>
          <Routes>
            <Route path={path.category} exact element={<Category />} />
            <Route path={path.product} exact element={<Product />} />
            <Route path={path.cartPage} exact element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
