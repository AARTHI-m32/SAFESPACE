import { configureStore } from '@reduxjs/toolkit';
import remainderReducer from './remainderSlice';

const store = configureStore({
    reducer: {
        remainder: remainderReducer
    }
});

export default store;
