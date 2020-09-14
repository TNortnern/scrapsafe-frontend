import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setAuthUser: (state, { payload }) => {
      state.user = payload;
    },
    updateUserEntries(state, { payload }) {
      state.user.entries = [...state.user.entries, payload]
    }
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
 setAuthUser,
 updateUserEntries
} = authSlice.actions;


export default authSlice.reducer;
