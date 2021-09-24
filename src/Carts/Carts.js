


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Carts extends Component {
  add = (event,itemName) => {
    this.props.incrementCount(itemName);
  };
  subtract = (event, itemName,index) => {
    this.props.decrementCount(itemName);
  };

  removeFromCart = (event,itemName) => {
    this.props.deleteFromCart(itemName);
   
  };


  render() {
    let TotalResult=0;
    let total=[];
    let subtotal = 0;
    let items = {};
    for (let item of this.props.carts) {
      // here, we construct an object where the key is the
      // item name and the value is an object that holds
      // information about the item
      if (!items[item.name]) {
        items[item.name] = {
          name: item.name,
          price: item.price,
          description: item.description,
          image_url: item.image_url,
          lebel: item.lebel,
          count: item.count,
        };
      }
      // While iterating through the cart, let's
      // also compute the subtotal
      subtotal = item.count*item.price;
      total.push(subtotal);

      
     
      }
      for (let item in total){
        TotalResult+=total[item]
    }
    let result = [];
    for (let item in items) {
      let output = (
        <div className="cart">
          <img
            src={items[item].image_url}
            alt={items[item].image_url}
            width="300px"
          />
          <p>{items[item].name} </p>
          <p>{items[item].price} </p>
          <p>{items[item].description} </p>
          <p>{items[item].lebel} </p>
          
          <h2>count:{items[item].count}</h2>
          <li onClick={event => this.add(event, items[item].name)}>+</li>
          <li onClick={event => this.subtract(event, items[item].name)}>-</li>
          <li onClick={event=>this.removeFromCart(event,items[item].name)}>Delete</li>
          {/* <li onClick={this.removeFromCart}>Delete</li> */}
        
        </div>
      );
      result.push(output);
    }
    return (
       
      <div className="carts">
       
    <h1>Total:{TotalResult}</h1>
    {result}
        <Link to="/pay">
            <li className="payLi" >Proceed to checkout</li>
          </Link>
      </div>
    );
  }
}
export default Carts;