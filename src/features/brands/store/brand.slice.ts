import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Brand } from "../types/brand.types";

export interface BrandState {
  brands: Brand[];
  isLoading: boolean;
  error: string | null;
}

const initialState: BrandState = {
  brands: [],
  isLoading: false,
  error: null,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrands: (state, action: PayloadAction<Brand[]>) => {
      state.brands = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const brandReducer = brandSlice.reducer;
export const { setBrands, setLoading, setError } = brandSlice.actions;
