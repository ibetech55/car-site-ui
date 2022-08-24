import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from '../configs/axiosRequest'
interface Brand {
    id: string;
    name?: string;
    origin?: string[];
}

interface Model {
    id: string;
    name: string;
    brand_id: string;
    brands: Brand;

}

export interface ModelState {
    models?: Brand[];
}

const initialState: ModelState = {
    models: null,
};

export const getModelsByBrand: any = createAsyncThunk('/models', async (brandId: string) => {
    const { data } = await axios.get(`/models//models-by-brand/${brandId}`, { params: { orderBy: 'name', orderType: 'asc' } })
    return data
})

export const modelSlice = createSlice({
    name: "model",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getModelsByBrand.fulfilled]: (state, action) => {
            state.models = action.payload;
        },
        [getModelsByBrand.pending]: (state, action) => {
            console.log('Pending')
        },
        [getModelsByBrand.rejected]: (state, action) => {
            state.models = undefined;
        }

    },
});

export const modelReducer = modelSlice.reducer;
