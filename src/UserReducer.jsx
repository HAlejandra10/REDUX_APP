import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name: "users", 
    initialState: userList, 
    reducers: {
        addUser: (state, action) => {
           // console.log(action)
           state.push(action.payload)
        }, 
        updateUser: (state, action) => {

        }
    },
})

export const {addUser, updateUser} = userSlice.actions;
export default userSlice.reducer;