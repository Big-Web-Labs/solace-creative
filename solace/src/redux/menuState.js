import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false
}

export const menuSlice = createSlice({
  name: 'menuState',
  initialState,
  reducers: {
    turnOn: (state) => {
      state.open = true
    },
    turnOff: (state) => {
        state.open = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { turnOn, turnOff } = menuSlice.actions

export default menuSlice.reducer