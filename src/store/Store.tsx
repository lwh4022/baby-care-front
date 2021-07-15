import { configureStore } from "@reduxjs/toolkit";

import coachReducer from './main/CoachSlice'
import babyInfoReducer from './main/BabyInfoSlice'

export const store = configureStore({
    reducer: {
        coach : coachReducer,   
        babyInfo : babyInfoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;