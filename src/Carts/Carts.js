// import React, { Component } from 'react';

// class Carts extends Component {
//   removeFromCart = () => {
   
//   };
//     render() {
//        let quantity=this.props.qty;
//           console.log(this.props.cartPrice);
//           console.log(this.props.qty);
//           console.log(this.props.carts);
//         return (
//             <div className="detail">
//               <h1>Subtotal:</h1>
//             {this.props.carts.map((cart) => {
              
//                 return (
        
//                     <div className="cart">
                      
//                       <img src={cart.image_url} alt={cart.image_url} width="300px"/>
//                       <p>{cart.name} </p>
//                       <p>{cart.price} </p>
//                       <p>{cart.description} </p>
//                       <p>{cart.lebel} </p>
//                       <li>Pay</li>
//                       <h2>count:</h2>
//                       <li>+</li><li>-</li>
//                       <li onClick={this.removeFromCart}>Delete</li>
                    
//                     </div>
                  
//                 );
//               })}
//             </div>
//         );
//     }
// }

// export default Carts;


import React, { Component } from 'react';
let coun;
class Carts extends Component {
 
  // removeFromCart = () => {
   
  // };
  add=(id)=>{
    coun =1;
    this.props.incrementCount(coun);
  }
  remove=(id)=>{
    this.props.DecrementCount(coun);
  }


    render() {
       coun =this.props.count;
       let quantity=(this.props.qty);
        
        return (
            <div className="detail">
              <h1>Subtotal:</h1>
            {this.props.carts.map((cart) => {
              
                return (
        
                    <div className="cart">
                      
                      <img src={cart.image_url} alt={cart.image_url} width="300px"/>
                      <p>{cart.name} </p>
                      <p>{cart.price} </p>
                      <p>{cart.description} </p>
                      <p>{cart.lebel} </p>
                      <li>Pay</li>
                      <h2>count:{this.props.count}</h2>
                      <li   onClick={this.add}>+</li><li   onClick={this.remove}>-</li>
                      <li onClick={this.removeFromCart}>Delete</li>
                    
                    </div>
                  
                );
              })}
            </div>
        );
    }
}

export default Carts;