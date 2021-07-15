import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CoachState {
    imgUrl : string,
    name: string,
    description: string
}

const initialState : CoachState = {
    imgUrl: 'person.jpg',
    name: 'Nguyen An Han',
    description : 'Co nhieu kinh nghiem trong con'
}

export const coachSlice = createSlice({
    name: 'coach',
    initialState,
    reducers: {
        changeCoachInfo : (state, action: PayloadAction<CoachState>)=> {
            state.imgUrl = action.payload.imgUrl
            state.description = action.payload.description
            state.name = action.payload.name
        },

    }
})

export const {changeCoachInfo} = coachSlice.actions

export default coachSlice.reducer;