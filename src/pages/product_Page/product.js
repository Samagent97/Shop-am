import { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Grey from "../../assests/Grey.png";
import product from "../../assests/product.png";
import "./product.css";

class Product extends Component {
  render() {
    return (
      <>
        <Navigation />
        <section className="product-overlay">
          <div className="left">
            {/* 3 Image options */}
            <div className="product-option">
              <div>
                <img src={product} alt="option 1" />
              </div>
              <div>
                <img src={product} alt="option 2" />
              </div>
              <div>
                <img src={product} alt="option 3" />
              </div>
            </div>
            <div className="selected-product">
              {/*selected product image component */}
              <img src={Grey} alt=""></img>
            </div>
          </div>
          <div className="right">
            <div>
              <h4>Apollo</h4>
              <p>Running Short</p>
            </div>
            <div>
              <span>
                <h5>SIZE:</h5>
                <div
                  className="
                size"
                >
                  <input className="size-input" placeholder="XS" name="" />
                  <input className="size-input" placeholder="S" name="" />
                  <input className="size-input" placeholder="M" name="" />
                  <input className="size-input" placeholder="L" name="" />
                </div>
              </span>
              <span>
                <h5>COLOR:</h5>
                <div className="color">
                  <input className="color-input" name="" type="" />
                  <input className="color-input" name="" type="" />
                  <input className="color-input" name="" type="" />
                </div>
              </span>

              <div className="price">
                <h5>PRICE:</h5>
                <h4>$50.00</h4>
              </div>
              <div>
                <input
                  className="submit"
                  type=""
                  placeholder="ADD TO CART"
                ></input>
              </div>
              <div>
                <p>
                  Find stunning women's cocktail dresses and paryy dresses.
                  Stand out in lace and metallic cocktail dresses and party
                  dresses from all your favourite brands.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Product;
