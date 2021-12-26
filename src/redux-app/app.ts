import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootType } from ".";

// TODO - test store, delete
interface CounterState {
  value: number,
}

const initialState: CounterState = {
  value: 0,
}

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = appSlice.actions;
export const appSelector = (state: RootType) => state.app

export default appSlice.reducer