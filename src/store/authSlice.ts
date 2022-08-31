import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import axios from '../configs/axiosRequest'
interface Auth {
    id: string;
    firstname?: string;
    lastname?: string[];
}

export interface AuthState {
    auth?: Auth;
    loading?: boolean;
}

const initialState: AuthState = {
    auth: null,
    loading: false
};

export const getAuth: any = createAsyncThunk('/user', async (id?: string) => {
    if (!id) return null
    const { data } = await axios.get(`/users/${id}`)
    return data
})


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.auth = null;
            localStorage.removeItem('test')
            window.location.pathname = "/"
        },
        loadingComponent: (state, action) => {
            state.loading = true
        },
        loadingComponentF: (state, action) => {
            state.loading = false
        }
    },
    extraReducers: {
        [getAuth.fulfilled]: (state, action) => {
            state.auth = action.payload;
            state.loading = false;
        },
        [getAuth.pending]: (state, action) => {
            state.loading = true;
        },
        [getAuth.rejected]: (state, action) => {
            state.auth = undefined;
        }

    },
});

export const { logout, loadingComponent, loadingComponentF } = authSlice.actions;
export const authReducer = authSlice.reducer;
