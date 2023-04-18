import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bgColor: null
}

export const bgSlice = createSlice({
    name: 'bgState',
    initialState,
    reducers: {
        setBgColor: (state, action) => {
            state.bgColor = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setBgColor } = bgSlice.actions

export default bgSlice.reducer