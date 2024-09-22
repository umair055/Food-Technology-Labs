import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllStations = createAsyncThunk(
  'stations/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data: chargingStations } = await axios.get(
        'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=fdpgLKYjndcWXLur2BpDVOTmjYJWiW9LqhVTyRtX&state=IL&fuel_type=ELEC'
      );
      return chargingStations.fuel_stations;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  style: {}, 
  chargingStations: [],
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setStyle: (state, action) => {
      state.style = action.payload;
    },
    changeWaterColor: (state, action) => {
      const layer = state.style.layers.find(layer => layer.id === 'water');
      if (layer) {
        layer.paint['fill-color'] = action.payload;
      }
    },
    toggleStations: (state, action) => {
      const layer = state.style.layers.find(layer => layer.id === 'allStations');
      if (layer) {
        layer.layout.visibility = action.payload;
      }
    },
    changeMarkerSize: (state, action) => {
      const layer = state.style.layers.find(layer => layer.id === 'allStations');
      if (layer) {
        layer.paint['circle-radius'] = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStations.fulfilled, (state, action) => {
        state.chargingStations = action.payload;
      })
      .addCase(fetchAllStations.rejected, (state, action) => {
        console.error('Failed to fetch charging stations:', action.payload);
      });
  }
});

export const { setStyle, changeWaterColor, toggleStations, changeMarkerSize } = mapSlice.actions;
export default mapSlice.reducer;
