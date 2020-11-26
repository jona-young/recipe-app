import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRecipesRandom, selectRecipeById, selectRecipesRandom} from './recipesSlice.js';
import './PageRecipe.css';
import SingleRecipe from "./SingleRecipe";

function PageRecipe ({ match }) {
    const { recipeId } = match.params
    const recipe = useSelector(state => selectRecipeById(state, parseInt(recipeId)))

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
            <h4 className="pagerecipe__lowtitle">6 Recipes</h4>
            <div className="pagerecipe__bottomrecipes">
                {content}
            </div>
        </div>
    )
}

export default PageRecipe;