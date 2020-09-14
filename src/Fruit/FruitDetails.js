import React, { Component } from "react";
import { Link } from "react-router-dom";

let fruitiCart;
let fruitCart;
let count;

class FruitDetails extends Component {

  fruitCart = (item) => {
   
 if(this.props.carts.includes(this.props.addCart(fruitiCart)))
    return this.props.count +1;
    else{
      this.props.addCart(fruitiCart);
    }
    this.props.addQty();
  };

  render() {
    fruitiCart = this.props.selectedFruit;
  
    return (
      <div className="detail">
       <div >
        <ul >
          <img
            src={this.props.selectedFruit.image_url}
            alt={this.props.selectedFruit.image_url}
            width="300px"
          />
          <p>{this.props.selectedFruit.name} </p>
          <p>{this.props.selectedFruit.price} </p>
          <p>{this.props.selectedFruit.description} </p>
          <p>{this.props.selectedFruit.lebel} </p>
        </ul>
        <Link to="/carts/" onClick={this.fruitCart}>
          
          <li>Add To Cart</li>
        </Link>
        
      </div>
      </div>
    );
  }
}

export default FruitDetails;


