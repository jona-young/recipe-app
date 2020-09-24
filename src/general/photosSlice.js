import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

const initialState = {
    photos: [],
    status: 'idle',
    error: null,
}

//TODO - pass parameter in async() in order to pull search term from spoontacular API to find Unsplash photo
export const fetchRandomPhotos = createAsyncThunk('photos/fetchRandomPhotos', async () => {
    return fetch('https://api.unsplash.com/photos/random/?client_id=cw1ZZ185SThdLPcEx7g4IherAzt-SFN9EdBKWOnjq-0&query=food&orientation=landscape')
        .then(res => res.json())
        .then((result) => {
            console.log("Unsplash Random API Call: ", result)
            const resCoverPhoto = [result.urls.regular, result.user.username]
            return resCoverPhoto
        }, (error) => {
            console.log(error)
        })
})

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRandomPhotos.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchRandomPhotos.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.photos = action.payload

        },
        [fetchRandomPhotos.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default photosSlice.reducer;

export const selectPhotosRandom = state => state.photos.photos