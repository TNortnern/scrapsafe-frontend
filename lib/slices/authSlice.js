import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

/**
 * Extract count from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current count
 */
export const selectUser = (state) => state.auth.user;

export const {
 setUser,
} = authSlice.actions;


export default authSlice.reducer;
