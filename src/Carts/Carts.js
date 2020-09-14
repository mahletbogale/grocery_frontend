

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// let coun;
// let count;
// let items = {};
// let pri;
// let total;
// let quantit;
// class Carts extends Component {
//   quantit=this.props.qty;
//   pri=items.price;
//   total= pri * quantit;



//   add = (event) => {
//     coun = this.props.count;
//     if(!coun < 1){
//     this.props.incrementCount(coun);
//     }
//   };

//   subtract = (event) => {
//     coun = this.props.count;
//    if(!coun  < 1) {
//     this.props.DecrementCount(coun);
//    }
//   };

//   render() {
//     coun = this.props.count;
//     let quantity = this.props.qty;
//     // let cart = this.props.carts[this.props.carts.length-1];
//     // let items = {};
//     for (let item of this.props.carts) {
//       console.log(item);
//       if (!items[item.name]) {
//         items[item.name] = {
//           name: item.name,
//           price: item.price,
//           description: item.description,
//           image_url: item.image_url,
//           lebel: item.lebel,
//           count: 1,
//         };
//       } 
//        else {
//         items[item.name].count++;
//         console.log("hey");
//       }
      
//     }
    
//     let result=[];
//     for(let cart in items) {
      
//       // console.log(cart["image_url"]);
//     let outPut= (<div className="cart">
    
//     <img src={items[cart].image_url} alt={items[cart].image_url} width="300px" />

//     <p>{items[cart].name} </p>
//     <p>{items[cart].price} </p>
//     <p>{items[cart].description} </p>
//     <p>{items[cart].lebel} </p>
//     <Link to="/pay"><li>Pay</li></Link>

   
//     <h2>count:{this.props.count}</h2>
//     {/* {items[cart].count} */}
//     <li onClick={this.add}>+</li>
//     <li onClick={this.subtract}>-</li>
//     <li onClick={this.removeFromCart}>Delete</li>
//   </div>)
//   console.log(items[cart].price);
//      result.push(outPut);
//     }
//     return (
//       <div className="detail">
//      <h1>Subtotal:{total}</h1>   
//        {/* <h1>Subtotal:(({items[cart].price})*{this.props.qty})</h1> */}
//         {result}</div>
//     );
//   }
// }

// export default Carts;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Carts extends Component {
  add = (event,itemName) => {
    this.props.incrementCount(itemName);
  };
  subtract = (event, itemName) => {
    this.props.decrementCount(itemName);
  };
  render() {
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
      subtotal += item.price;
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
          <Link to="/pay">
            <li>Pay</li>
          </Link>
          <h2>count:{items[item].count}</h2>
          <li onClick={event => this.add(event, items[item].name)}>+</li>
          <li onClick={event => this.subtract(event, items[item].name)}>-</li>
          <li onClick={this.removeFromCart}>Delete</li>
        </div>
      );
      result.push(output);
    }
    return (
      <div className="detail">
        <h1>Subtotal:{subtotal}</h1>
        {result}
      </div>
    );
  }
}
export default Carts;