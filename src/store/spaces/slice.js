import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: [],
  // spaceDetails: {} || null
};

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    spaceFetched: (state, action) => {
      state.spaces = [...state.spaces, ...action.payload];
    },
  },
});

export const { spaceFetched } = spaceSlice.actions;

export default spaceSlice.reducer;
