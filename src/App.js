import { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart_Page/cart";
import Category from "./pages/category_Page/category";
import Product from "./pages/product_Page/product";
import { path } from "./routes";
import White from "./assests/White.png";

export default class App extends Component {
  constructor(){ 
    super();
    this.state = {
      currentItem: {
        id: 1,
        Image: White,
        title: "Apollo Running Short",
        price: "$50.00",
        optionImage:'',
      }
    }
  } 
  setCurrentItem = (newCurrentItem) => {
    this.setState({
      currentItem: newCurrentItem
    });
  }
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
            <Route path={path.category} exact element={<Category setCurrentItem={this.setCurrentItem} />} />
            <Route path={path.product} exact element={<Product currentItem={this.state.currentItem}/>} />
            <Route path={path.cartPage} exact element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
