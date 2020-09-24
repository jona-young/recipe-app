import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './general/photosSlice.js';
import recipesReducer from './general/recipesSlice.js';

export default configureStore({
    reducer: {
        photos: photosReducer,
        recipes: recipesReducer,
    }
})