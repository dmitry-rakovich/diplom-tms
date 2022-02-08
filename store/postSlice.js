import { createSlice} from '@reduxjs/toolkit' 
import { fetchPosts } from '../components/Post'

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'ok';
            state.posts = action.payload

        },
        [fetchPosts.rejected]: (state, action) => {}
    }

})

export const { addPost, removePost} = postSlice.actions

export default postSlice.reducer