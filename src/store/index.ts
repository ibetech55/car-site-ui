import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { brandReducer } from "./brandSlice";
import { modelReducer } from "./modelSlice";

export const store = configureStore({
    reducer: {
        brands: brandReducer,
        models: modelReducer,
        auth: authReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;