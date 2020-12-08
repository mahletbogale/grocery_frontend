import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <li className="homeli">&#9776;</li>
        </Link>

        <Link to="/carts/">
          <li className="fa">
            <span>Cart</span>
          </li>
          <p className="quantity"> {this.props.qty}</p >
        </Link>
      </nav>
    );
  }
}

export default Nav;
