import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p><b>Ingredients:</b></p>
            <ul>
                {ingredients.map(e=>(
                    <li>{e.text}</li>
                ))}
            </ul>
            <p><b>Calories: </b>{Math.floor(calories)}</p>
            <img className={style.image} src = {image} alt=''/>
        </div>
    );
}

export default Recipe;