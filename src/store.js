import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './general/photosSlice.js';

export default configureStore({
    reducer: {
        photos: photosReducer,
    }
})