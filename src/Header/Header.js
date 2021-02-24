import React, { Component } from "react";
// import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="newhead">
        <Link to="/">
        <h1 className="proname
        
        ">Myshop &#9776;</h1>
        {/* <li className="homeli">&#9776;</li> */}
        </Link>
        <form>
            <input
              type="text"
              className="put"
              placeholder="Search"
              value={this.props.inputValue}
              onChange={this.props.filterOnChange}
            />
          </form>
          <Link to="/carts/">
          {/* <li className="fa"> */}
            <p className="fa">Cart {this.props.qty}</p>
          {/* </li> */}
          {/* <span className="quantity"> {this.props.qty}</span> */}
        </Link>
        {/* <Nav qty={this.props.qty} /> */}
        </div>
      </header>
    );
  }
}

export default Header;
