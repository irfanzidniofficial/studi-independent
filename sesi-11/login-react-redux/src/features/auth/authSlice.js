import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authLoginAPI.pending, (state) => {
        state.isLoginPending = true;
        state.isLoginSucces = false;
        state.errorMessage = "";
      })
      .addCase(authLoginAPI.fulfilled, (state, action) => {
        console.log("fulfilled");
        console.log(action);
        const { email } = action.payload;
        state.isLoginPending = false;
        state.isLoginSucces = true;
        state.user = { email };
        state.errorMessage = "";
      })
      .addCase(authLoginAPI.rejected, (state, action) => {
        console.log(action, "rejected");
        state.isLoginPending = false;
        state.isLoginSucces = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default authSlice.reducer;
