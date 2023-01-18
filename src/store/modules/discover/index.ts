import { createSlice } from '@reduxjs/toolkit'

const discoverSlice = createSlice({
  name: 'discover',
  initialState: {
    name: 'ssss'
  },
  reducers: {
    setName(state, { payload }) {
      state.name = payload
    }
  }
})

export const { setName } = discoverSlice.actions

export default discoverSlice.reducer
