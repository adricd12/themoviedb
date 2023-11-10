import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MyList, MyMovie } from "./types";

const initialState: MyList = {
    movies: [],
};

export const myListSlice = createSlice({
    name: 'myList',
    initialState,
    reducers: {
        addMovie(state, { payload }: PayloadAction<MyMovie>) {
            state.movies.push(payload);
        },
    },
});

export const { addMovie } = myListSlice.actions
export default myListSlice.reducer;