import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ('./Recipe.css');

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.String.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }
  render(){
    const {title} = this.props;
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));
    const {instructions} = this.props;
    const {img} = this.props;
    console.log( ingredients)
    return(
    <div class="recipe-card">
      <div class="recipe-card-img">
        <img src={img} alt={title} />
      </div>
      <div class="recipe-card-content">
        <h3 class="recipe-title">{title}</h3>
        <h4>ingredients:</h4>
        <ul>
          {ingredients}
        </ul>
        <h4>Instructions:</h4>
        <p>{instructions}</p>
      </div>
    </div>
    )
  }
}

export default Recipe;
