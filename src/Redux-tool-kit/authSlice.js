import { createSlice } from "@reduxjs/toolkit";
import { currentUser, login,logOut } from "../services/auth";

const initialState = {
    status :false,
    userdata:{}
}

const auth = createSlice({
    name:"auth",
    initialState,
    extraReducers:(builder)=>{
         builder.addCase(currentUser.fulfilled,(status,action)=>{
            status.status,
            status.userdata = action.payload
         })
         builder.addCase(login.fulfilled,(status,action)=>{
            status.status = true,
            status.userdata = action.payload
         })
         builder.addCase(logOut.fulfilled,(status)=>{
            status.status = false,
            status.userdata = {}
         })
    }
})

export default auth.reducer