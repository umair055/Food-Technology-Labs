import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import mapBoxSlice from "./slices/mapBoxSlice";
const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  map:mapBoxSlice
});

export default persistReducer(persistConfig, reducers);
