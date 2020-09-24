import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

const initialState = {
    recipes: [],
    status: 'idle',
    error:null,
}

export const fetchRecipesRandom = createAsyncThunk('recipes/fetchRecipesRandom', async() => {
    return fetch('https://api.spoonacular.com/recipes/random?apiKey=4e659ccc41a4462b804b15dee778f554&limitLicense=true&number=6')
        .then(res => res.json())
        .then((result) => {
            console.log('spoontacular API call: ', result.recipes)
            return result.recipes
        })
})


const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRecipesRandom.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchRecipesRandom.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.recipes = state.recipes.concat(action.payload)
        },
        [fetchRecipesRandom.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default recipesSlice.reducer;

export const selectRecipesRandom = state => state.recipes.recipes;