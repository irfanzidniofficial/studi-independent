import {
  createSlice,
  createAstncThunk,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import logger from "redux-logger";
import { executeReducerBuilderCallback } from "@reduxjs/toolkit/dist/mapBuilders";

const initialState = {
  isLoginPending: false,
  isLoginSucces: false,
  errorMessage: "",
  user: {},
};

function callLoginApi(email, password) {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (email === "admin@login.com" && password === "admin") {
        resolve({ email });
      } else {
        rejected("Invalid email dan password");
      }
    }, 100);
  });
}

export const authLoginAPI = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await callLoginApi(email, password);
      return response.email;
    } catch (err) {
      throw err;
    }
  }
);

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authLoginAPI.pending, (state) => {
        state.isLoginPending = true;
      })
      .addCase(authLoginAPI.fullfilled, (state, action) => {
        console.log("fullfilled");
        console.log(action);
        const { email } = action.payload;
        state.isLoginPending = false;
        state.isLoginSucces = true;
        state.user = { email };
      })
      .addCase(authLogina.rejected, (state, action) => {
        console.log(action, "rejected");
        state.isLoginPending = false;
        state.isLoginSucces = false;
        state.errorMessage = action.error.message;
      });
  },
});
