import React from 'react';
import PropTypes from 'prop-types';

const Box = function(props) {
    const divStyle = {
      backgroundColor: props.color,
      height: '250px',
      width: '250px',
      display: 'inline-block'
    }
    return (<div style={divStyle}></div>)
}



export default Box;
