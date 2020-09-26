import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectRecipeById, selectRecipesRandom } from './recipesSlice.js';
import './PageRecipe.css';

function PageRecipe ({ match }) {
    const { recipeId } = match.params
    console.log('here we go', recipeId)

    /*
        Cross referencing recipeId from RecipesRandom, SingleRecipe, PageRecipe
        it all matches up

        Figured out for some reason the global state is reset after navigating
        to this PageRecipe page...running standard useSelector(selectRecipeById)
        whch usually works does not match up...

        Upon further testing to select all objects from state, it returns as an
        empty array, the default initial state of the global state...weird
    */

    const recipe = useSelector(state => selectRecipeById(state, recipeId))
    console.log('recipe is, ', recipe)
    const recipesRandom = useSelector(selectRecipesRandom)
    console.log('rrCALL, ', recipesRandom)


    if (!recipe) {
        return (
            <div>
                <h2>Recipe not found!</h2>
            </div>
        )
    }

    return (
        <div className="pagerecipe">
            <h2>{recipe.title}</h2>
            <p>
                {recipe.information}
            </p>
        </div>
    )
}

export default PageRecipe;