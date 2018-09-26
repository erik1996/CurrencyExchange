import React, { Component } from 'react'
import './menu.css'

class Menu extends Component {
    render() {
      return (
        <ul className="menu">
            <li><a href='/'>Home</a></li>
            <li><a href='/currencies'>All Currencies</a></li>
        </ul>
      );
    }
}

export default Menu;


