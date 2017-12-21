import React, {Component} from 'react';
import './Header.css'
class Header extends Component{
  render() {
      return(
        <header>
          <h2><a>Recipe App</a></h2>
          <nav>
            <li>New Recipe</li>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </nav>
        </header>
      )
    }
}
export default Header;
