import React, {Component} from 'react';
import './Header.css'
class Header extends Component{
  render() {
      return(
        <header>
          <h2><a>Memory Game</a></h2>
          <nav>
            <li>New Game</li>
          </nav>
        </header>
      )
    }
}
export default Header;
