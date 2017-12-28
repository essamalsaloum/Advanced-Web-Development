import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'

const Header = ({onNewGame}) => (
      <header>
        <h2><a>Memory Game</a></h2>
        <nav>
          <li><a onClick={onNewGame}>New Game</a></li>
        </nav>
      </header>
)

Header.propTypes = {
  onNewGame: PropTypes.func.isRequired
}

export default Header;
