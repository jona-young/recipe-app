import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectRecipeById } from './recipesSlice.js';
import './PageRecipe.css';

function PageRecipe ({ match }) {
    const { recipeId } = match.params
    const recipe = useSelector(state => selectRecipeById(state, parseInt(recipeId)))

    if (!recipe) {
        return (
            <div className="pagerecipe">
                <h2>Recipe not found!</h2>
            </div>
        )
    }

    return (
        <div className="pagerecipe">
            <h2 className="pagerecipe__title">{recipe.title}</h2>
            <img className="pagerecipe__image" src={ recipe.image } alt={ recipe.id } />
            <div dangerouslySetInnerHTML={{ __html: recipe.summary }}
                 className="pagerecipe__instructions"
            />
        </div>
    )
}

export default PageRecipe;