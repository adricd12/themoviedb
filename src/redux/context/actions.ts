import { createAsyncThunk } from "@reduxjs/toolkit";
import { createGuestSession } from "@/api/api";

export const createGuestSessionAction = createAsyncThunk(
    'createGuestSessionAction',
    async ( undefined, {dispatch}) => {
        const session = await dispatch(createGuestSession.initiate());
        return session.data;
});
