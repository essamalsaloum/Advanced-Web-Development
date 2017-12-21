import React, {Component} from 'react';

class Hobbies extends Component {
  render() {
    const liStyle = {fontSize: '1.5em'};
    const hobbies = ['Sleeping', 'Eating', 'Miaowing'];
    return(
      <ul>
          {hobbies.map((h,i)=> {
            return <li key={i} style={liStyle}>{h}</li>
          })}
      </ul>
    );
  }
}

export default Hobbies;
