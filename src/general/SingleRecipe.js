import React from 'react';

function SingleRecipe ({recipe}) {
    return (
        <div className="recipes__contentBox">
            <img className="recipes__boxImg" src={ recipe.image } />
            <p className="recipes__boxText">{ recipe.title }</p>
        </div>
    )
}

export default SingleRecipe;