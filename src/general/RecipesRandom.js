import React, { useEffect } from 'react';
import SingleRecipe from './SingleRecipe.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipesRandom, selectRecipesRandom } from './recipesSlice.js';

import './RecipesRandom.css';

function RecipesRandom () {
    const dispatch = useDispatch()
    const recipesStatus = useSelector(state => state.recipes.status)
    const error = useSelector(state => state.recipes.error)
    const recipesRandom = useSelector(selectRecipesRandom)

    useEffect (() => {
        if (recipesStatus === 'idle') {
            dispatch(fetchRecipesRandom())
        }
    }, [recipesStatus, dispatch])

    let content

    if (recipesStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (recipesStatus === 'succeeded') {
        content = recipesRandom.map(recipeId => (
            <SingleRecipe key={recipeId.id} recipeId={recipeId} />
        ))
    } else if (recipesStatus === 'error') {
        content = <div>{error}</div>
    }

    return (
        <div className="recipes">
            <div className="recipes__content">
                { content }
            </div>
        </div>
    )
}

export default RecipesRandom;