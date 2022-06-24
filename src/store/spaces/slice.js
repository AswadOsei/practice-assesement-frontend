import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spaces: [],
  spaceDetails: null,
};

export const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    spaceFetched: (state, action) => {
      state.spaces = [...action.payload];
    },
    spaceDetailsFetched: (state, action) => {
      state.spaceDetails = { ...action.payload };
    },
  },
});

export const { spaceFetched, spaceDetailsFetched } = spaceSlice.actions;

export default spaceSlice.reducer;

// reducers: {
//   fetchedAllSpaces: (state, action) => {
//     state.allSpaces = [...action.payload];
//   },
// },
