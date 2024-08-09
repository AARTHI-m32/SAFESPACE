import { createSlice } from '@reduxjs/toolkit';

const remainderSlice = createSlice({
    name: 'remainder',
    initialState: {
        myList: []
    },
    reducers: {
        setList : (state,action) => {
            state.myList = action.payload
        },
        addToMyList: (state, action) => {
            state.myList.push(action.payload);
        }
    }
});

export const { addToMyList,setList } = remainderSlice.actions;
export default remainderSlice.reducer;
