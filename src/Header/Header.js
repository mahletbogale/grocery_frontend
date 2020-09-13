import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Header extends Component {
    render() {
        return (
          <header>
          <h1 className="proname">Myshop</h1>
              <Nav qty={this.props.qty}/>
              </header>
        );
    }
}

export default Header;