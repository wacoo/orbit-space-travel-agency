import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_URL = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  isLoading: false,
  rockets: [
    {
      id: '',
      rocket_name: '',
      description: '',
      flickr_images: '',
    },
  ],
  error: undefined,
};

const fetchRockets = createAsyncThunk('rockets/fetchData', async () => {
  try {
    const res = axios.get(ROCKET_URL);
    return (await res).data;
  } catch (err) {
    return err.message;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        const { payload } = action;
        state.rockets = [];
        payload.forEach((rocket) => {
          const data = {};
          data.id = rocket.id;
          data.rocket_name = rocket.name;
          data.description = rocket.description;
          data.flickr_images = rocket.flickr_images;
          state.rockets.push(data);
        });
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
export { fetchRockets };
