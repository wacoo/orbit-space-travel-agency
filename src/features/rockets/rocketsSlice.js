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
  reducers: {
    reserveRocket: (state, action) => {
      const newRockets = state.rockets.map((rocket) => {
        if (action.payload !== rocket.id) {
          return rocket;
        }
        const reserved = { ...rocket, reserved: true };
        return reserved;
      });
      state.rockets = newRockets;
    },
    cancelRocketReservation: (state, action) => {
      const newRockets = state.rockets.map((rocket) => {
        if (action.payload !== rocket.id) {
          return rocket;
        }
        const canceled = { ...rocket, reserved: false };
        return canceled;
      });
      state.rockets = newRockets;
    },
  },
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
export const { reserveRocket, cancelRocketReservation } = rocketsSlice.actions;
