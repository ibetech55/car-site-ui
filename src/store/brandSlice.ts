import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from '../configs/axiosRequest'
interface Brand {
    id: string;
    name?: string;
    origin?: string[];
}

interface AddFoodToCustomerPayload {
    food: string;
    id: string;
}

export interface BrandState {
    brands?: Brand[];
}

const initialState: BrandState = {
    brands: null,
};

export const getBrands: any = createAsyncThunk('/brands', async () => {
    const { data } = await axios.get('/brands', { params: { orderBy: 'name', orderType: 'asc' } })
    return data
})


export const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getBrands.fulfilled]: (state, action) => {
            state.brands = action.payload;
        },
        [getBrands.pending]: (state, action) => {
            console.log('Pending')
        },
        [getBrands.rejected]: (state, action) => {
            state.brands = undefined;
        }

    },
});

export const brandReducer = brandSlice.reducer;
