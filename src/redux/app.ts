import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootType } from ".";

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const appSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
        console.log('state',state)
      state.value += 1
      console.log(' state.value', state.value)
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = appSlice.actions;
export const appSelector = (state: RootType) => state.app

export default appSlice.reducer