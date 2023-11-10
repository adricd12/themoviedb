import { createSlice } from "@reduxjs/toolkit";
import { Context } from "./types";
import { GuestSession, Movie } from "@/api/types";
import { createGuestSessionAction } from "./actions";

const initialState: Context = {
    guestSession: {} as GuestSession,
};

export const contextSlice = createSlice({
    name: 'context',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createGuestSessionAction.fulfilled, (state, action) => {
            state.guestSession = action.payload || {} as GuestSession;
        });
    }
});

export default contextSlice.reducer;