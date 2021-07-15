import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProp } from "../../components/card/ShortCard";

export interface CoachState {
    name: string,
    description: string,
    cardProp : CardProp
}

const initialState : CoachState = {
    name: 'Nguyen An Han',
    description : 'Co nhieu kinh nghiem trong con',
    cardProp: {
        imgUrl: 'person.jpg',
        name : 'Nguyen An Han',
        description : 'Co nhieu kinh nghiem trong con'
    }
}

export const coachSlice = createSlice({
    name: 'coach',
    initialState,
    reducers: {
        changeCoachInfo : (state, action: PayloadAction<CoachState>)=> {
        },

    }
})

export const {changeCoachInfo} = coachSlice.actions

export default coachSlice.reducer;