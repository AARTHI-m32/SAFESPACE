import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        token : null,
        name : null
    },
    reducers : {
        setToken : (state,action) => {
            state.token = action.payload
        },
        removeToken : (state,action) => {
            state.token =null
        } ,
        setName : (state,action) => {
            state.name =action.payload
        }
    }
})

export const {setToken,removeToken,setName} = userSlice.actions
export default userSlice.reducer