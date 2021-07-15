import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProp } from "../../components/card/ShortCard";

export interface BabyInfoState {
    header: string
    content: string
    cardProp : CardProp
}

const initialState : BabyInfoState = {
    header: 'Header',
    content: 'content',
    cardProp: {
        imgUrl: 'person.jpg',
        name: 'Header',
        description : 'content'
    }
}



export const babyInfoSlice = createSlice({
    name: 'coach',
    initialState,
    reducers: {
        changeBabyInfo : (state, action: PayloadAction<BabyInfoState>)=> {
        },

    }
})

export const {changeBabyInfo} = babyInfoSlice.actions

export default babyInfoSlice.reducer;