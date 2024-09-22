// authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData } from "../../api/apiClient";
import { removeLocalData, setLocalData } from "../../utils";

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const login = createAsyncThunk("login", async (params, thunkApi) => {
  try {
    const response = await postData("user/login", params);
    console.log("Response from Login Api", response);

    // Throw Err
    if (response?.status && response.status !== 200) {
      throw response;
    }
    console.log(response.data);
    // Storing data locally
    setLocalData("userData", response.data);
    return response;
  } catch (err) {
    return thunkApi.rejectWithValue(err?.error || "Something went wrong");
  }
});

export const logout = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    removeLocalData("userData");
    return {};
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const signup = createAsyncThunk("signup", async (_, thunkApi) => {
  try {
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle login cases
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        console.log("Error checking in Login Rejected ", action);
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload.message;
      });

    // Handle logout cases
    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = {};
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
    //Handle SignUp Cases
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = {};
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

// export const { login, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
