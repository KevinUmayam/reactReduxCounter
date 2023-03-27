import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true };


export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    // createSlice creates unique action identifiers for all of our reducers
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer 