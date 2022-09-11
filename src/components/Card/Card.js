import { Component } from "react";
import { cardDatas } from "../../utils/Data";
import "./Card.css";
import Vector from "../../assests/Vector.png";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            padding: "1rem",
            paddingTop: "0rem",
          }}
        >
          {cardDatas.map((cardData) => (
            <Link
              to="/product"
              className="product-Card"
              style={{ margin: "1rem" }}
              key={cardData.id}
              onClick={() => {this.props.setCurrentItem(cardData)}}
            >
              <div className="product-Card-inner">
                <div className="product-image">
                  <img src={cardData.Image} alt="product" />
                </div>
                <div className="product-details" style={{ marginTop: "1rem" }}>
                  <div className="product-Name">
                    {cardData.title}
                    <div
                      className="icon"
                      style={{ 
                        background: "#5ece7b", }}
                    >
                      <img src={Vector} alt="Cart" />
                    </div>
                  </div>
                </div>
                <h4 className="product-price">
                  {cardData.price}
                </h4>
              </div>
            </Link>
          ))}
        </section>
      </>
    );
  }
}
export default Card;
