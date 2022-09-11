import { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
// import Grey from "../../assests/Grey.png";
// import product from "../../assests/product.png";
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
                <img src={this.props.currentItem.Image} alt="option 1" style={{width: "100px", height: "100px"}} />
              </div>
              <div>
                <img src={this.props.currentItem.Image} alt="option 2" style={{width: "100px", height: "100px"}} />
              </div>
              <div>
                <img src={this.props.currentItem.Image} alt="option 3" style={{width: "100px", height: "100px"}} />
              </div>
            </div>
            <div className="selected-product">
              {/*selected product image component */}
              <img src={this.props.currentItem.Image} alt=""></img>
            </div>
          </div>
          <div className="right">
            <div>
              <h4>{this.props.currentItem.title}</h4>
              {/* <p>Running Short</p> */}
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
                <h4>{this.props.currentItem.price}</h4>
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
