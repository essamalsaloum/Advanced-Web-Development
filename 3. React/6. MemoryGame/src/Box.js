import React, {Component} from 'react';

class Box extends Component {
    render() {
    const style = {
      width: '100px',
      height: '100px',
      display: 'inline-block',
      backgroundColor: this.props.color,
      borderRadius: '10px',
      border: '10px solid grey'
    }
    return <div style={style}></div>
  }
}

export default Box;
