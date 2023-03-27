import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = { isAuthenticated: false }


const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    // createSlice creates unique action identifiers for all of our reducers
    reducers: {
        logIn(state) {
            state.isAuthenticated = true;
        },
        logOut(state) {
            state.isAuthenticated = false;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer 