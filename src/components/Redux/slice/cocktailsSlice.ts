import { createSlice } from '@reduxjs/toolkit'

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {

      state.value += 1
    },
  },
})

export const { increment } = cocktailSlice.actions

export default cocktailSlice.reducer