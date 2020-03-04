import React from 'react'
import Style from './recipe.module.css'
const Recipe = (props) => {
    return (
      <div className={Style.recipe}>
          <h2 >{props.title}</h2>
          <p>{props.calories}</p>
          <img className={Style.image} src={props.image} alt=""/>
      </div>  
    );
};

export default Recipe;