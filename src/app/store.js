import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themeSlice';
import projectReducer from '../features/projectSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        projects: projectReducer,
    },
});