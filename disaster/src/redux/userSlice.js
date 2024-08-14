import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        token : null,
        name : null,
        role : null,
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
        },
        setRole : (state,action) => {
            state.role =action.payload
        }
    }
})

export const {setToken,removeToken,setName,setRole} = userSlice.actions
export default userSlice.reducer