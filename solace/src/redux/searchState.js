import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchOpen: false
}

export const searchSlice = createSlice({
  name: 'searchState',
  initialState,
  reducers: {
    searchOn: (state) => {
      state.searchOpen = true
    },
    searchOff: (state) => {
      state.searchOpen = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { searchOn, searchOff } = searchSlice.actions

export default searchSlice.reducer