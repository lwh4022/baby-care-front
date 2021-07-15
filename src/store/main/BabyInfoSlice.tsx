import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BabyInfoState {
    header: string
    content: string
    imgUrl : string
}

const initialState : BabyInfoState = {
    imgUrl: 'person.jpg',
    header: 'Header',
    content: 'content'
}

export const babyInfoSlice = createSlice({
    name: 'coach',
    initialState,
    reducers: {
        changeBabyInfo : (state, action: PayloadAction<BabyInfoState>)=> {
            state.imgUrl = action.payload.imgUrl
            state.header = action.payload.header
            state.content = action.payload.content
        },

    }
})

export const {changeBabyInfo} = babyInfoSlice.actions

export default babyInfoSlice.reducer;