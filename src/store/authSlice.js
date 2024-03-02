import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;  // When variable name and payload variable name is same then we dont want want to write action.payload.variablename;
        },
        logout: (state) =>{
            state.status = false;
            state.userData = null;
        } 
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;