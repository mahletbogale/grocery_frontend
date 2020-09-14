import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <li className="homeli">&#9776;</li>
        </Link>

        <Link to="/carts/"><li className="fa">
            <span>Cart</span>
          </li>
          <span> {this.props.qty}</span>
        </Link>
      </nav>
    );
  }
}

export default Nav;
