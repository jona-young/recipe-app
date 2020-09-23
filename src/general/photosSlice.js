import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

const initialState = {
    photo: '',
    status: 'idle',
    error: null,
}

/*TODO: ADD ATTRIBUTION INTO STATE WITH @Photographer and recipes-app as referral
TODO - The @PHOTOGRAPHER will have to be pulled from the fetch as an array(?) then
TODO - added under fetchRandomPhotos.fulfilled

Photo by <a href="https://unsplash.com/@anniespratt?utm_source=recipes-app&utm_medium=referral">
            Annie Spratt
         </a>
         on
         <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">
            Unsplash
         </a>
*/
export const fetchRandomPhotos = createAsyncThunk('photos/fetchRandomPhotos', async () =>{
    localStorage.clear()
    return fetch('https://api.unsplash.com/photos/random/?client_id=cw1ZZ185SThdLPcEx7g4IherAzt-SFN9EdBKWOnjq-0&query=food&orientation=landscape')
        .then(res => res.json())
        .then((result) => {
            console.log(result.urls.regular)
            return result.urls.regular
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
            state.photo = action.payload

        },
        [fetchRandomPhotos.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }

})

export default photosSlice.reducer;

export const selectRandomPhoto = state => state.photos.photo
