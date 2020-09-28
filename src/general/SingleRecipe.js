import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectRecipeById } from './recipesSlice.js';
import './RecipesRandom.css';

function SingleRecipe ({recipeId}) {
    const recipe = useSelector(state => selectRecipeById(state, recipeId.id))

    return (
        <div className="recipes__contentBox">
            <img className="recipes__boxImg" src={ recipe.image } alt={ recipe.id } />
            <Link to={`/recipes/${recipe.id}`} className="recipes__boxLink">
                <p className="recipes__boxText">{ recipe.title }</p>
            </Link>
        </div>
    )
}

export default SingleRecipe;