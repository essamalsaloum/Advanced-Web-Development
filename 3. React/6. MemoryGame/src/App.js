import React, { Component } from 'react';
import logo from './logo.svg';
import Box from './Box';
import Header from './Header';
import shuffle from 'shuffle-array';
import './App.css';

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

class App extends Component {
  constructor(props){
    super(props);
    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
    ];
    cards = shuffle(cards);
    this.state = {cards, noClick: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState(prevState => {
      let cards = prevState.cards.map(c=> (
        c.id === id ? {
          ...c,
          cardState: c.cardState === CardState.HIDING ? CardState.MATCHING : CardState.HIDING
        } : c
      ))
      return {cards};
    })
  }
  render() {
      const cards = this.state.cards.map((card)=> (
        <Box
          key={card.id}
          backgroundColor = {card.backgroundColor}
          showing= {card.cardState !== CardState.HIDING}
          onClick = {()=> this.handleClick(card.id)}
        />
      ));
    return (
      <div className="App">
        <Header />
        {cards}
      </div>
    );
  }
}

export default App;
