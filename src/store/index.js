
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true };


const counterSlice = createSlice({
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


const store = configureStore({
    reducer: counterSlice.reducer
});

// allows us to get a hold of all our our unique actions for our reducers...gives us keys that match our methodnames in our reducers area
export const counterActions = counterSlice.actions;

export default store;