import { ProductData } from "@/models/product.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type Product = {
  products: ProductData[];
};

const initialState: Product = {
  products: [],
};
const productSlice = createSlice({
  name: "fetchProduct",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductData[]>) => {
      state.products = action.payload;
    },
  },
});
export const { setProduct } = productSlice.actions;
// export const productSe
export const productSelector = (state: RootState) => state.products.products;
export default productSlice.reducer;
