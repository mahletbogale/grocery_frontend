import React, { Component } from "react";
import { Link } from "react-router-dom";
let vegiCart;
let vegCart;

class VegetableDetails extends Component {
  vegCart = (item) => {
    this.props.addCart(vegiCart);
    this.props.addQty();
  };
  render() {
    vegiCart = this.props.selectedVeg;

    return (
      <div className="detail">
        <ul>
          <img
            src={this.props.selectedVeg.image_url}
            alt={this.props.selectedVeg.image_url}
            width="300px"
          />
          <p>{this.props.selectedVeg.name} </p>
          <p>{this.props.selectedVeg.price} </p>
          <p>{this.props.selectedVeg.description} </p>
          <p>{this.props.selectedVeg.lebel} </p>
        </ul>

        <Link to="/carts/" onClick={this.vegCart}>
          {" "}
          <li>Add To Cart</li>{" "}
        </Link>
      </div>
    );
  }
}

export default VegetableDetails;
