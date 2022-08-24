import { configureStore } from "@reduxjs/toolkit";
import { brandReducer } from "./brandSlice";
import { modelReducer } from "./modelSlice";

export const store = configureStore({
    reducer: {
        brands: brandReducer,
        models: modelReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;