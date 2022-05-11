import { configureStore } from "@reduxjs/toolkit";
import { taskApiSlice } from './slices/task-slice';

export const store = configureStore({
    reducer: {
        [taskApiSlice.reducerPath]: taskApiSlice.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(taskApiSlice.middleware);
    }
});