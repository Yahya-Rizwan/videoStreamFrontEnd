import { createSlice } from "@reduxjs/toolkit";
import { currentUser, login, logOut } from "../services/auth";

const initialState = {
    status: false,
    userdata: {}
};

const auth = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(currentUser.fulfilled, (state, action) => {
            state.status = true; // Ensure state is properly updated
            state.userdata = action.payload; // Set user data
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = true;
            state.userdata = action.payload;
        });
        builder.addCase(logOut.fulfilled, (state) => {
            state.status = false;
            state.userdata = {};
        });
    }
});

export default auth.reducer;
