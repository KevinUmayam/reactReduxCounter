
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

// allows us to get a hold of all our our unique actions for our reducers...gives us keys that match our methodnames in our reducers area

export default store;