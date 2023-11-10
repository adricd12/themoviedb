import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectGuestSession = createSelector((state: RootState) => state.context, (state) => state.guestSession);