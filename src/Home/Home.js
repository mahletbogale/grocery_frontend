import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="apphome">
        

        <Link to="/vegetablelist/vegetablelist">
        <div className="lists">
            Vegetables
            </div>
          </Link>
          
          
          <Link to="/comming/comming">
          <div className="lists">
            Comming
            </div>
          </Link>
          
          <Link to="/fruitlist/fruitlist">
          <div className="lists">
            Fruits
            </div>
          </Link>
         
        
          <Link to="/commingS/commingS">
          <div className="lists">
            Comming
            </div>
          </Link>
         
          
          <Link to="/commingSo/commingS0">
          <div className="lists">
            Comming
            </div>
          </Link>
       
        
          <Link to="/commingSo/commingS0">
          <div className="lists">
            Comming
            </div>
          </Link>
       
       </div>
    );
  }
}

export default Home;
