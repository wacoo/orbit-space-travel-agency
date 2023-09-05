import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_URL = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
    isLoading: false,
    rockets: [],
    error: undefined,
};

const fetchRockets = createAsyncThunk('rockets/fetchData', async () => {
    try {        
        const res = axios.get(ROCKET_URL);
        return (await res).data;
    } catch(err) {

    }

});

const rocketsSlice = createSlice({
    name: 'rockets',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchRockets.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchRockets.fulfilled, (state, action) => {
            state.isLoading = false;
            // const data = {};
            const payload = action.payload;
            console.log(payload);
        })
        .addCase(fetchRockets.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export default rocketsSlice.reducer;
export {fetchRockets};