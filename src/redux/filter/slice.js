import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    // name: "",
    // number: "",
    text: "",
  },
  reducers: {
    filterContacts: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export default filterSlice.reducer;
