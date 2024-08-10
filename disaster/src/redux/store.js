import { configureStore } from '@reduxjs/toolkit';
import remainderReducer from './remainderSlice';
import userSlice from './userSlice';

const store = configureStore({
    reducer: {
        remainder: remainderReducer,
        user : userSlice
    }
});

export default store;
