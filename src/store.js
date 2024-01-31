import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit";
import CategorySlice from "./features/category/CategorySlice";
import ProductSlice from "./features/product/ProductSlice";
import CartSlice from "./features/cart/CartSlice";

const initialState = {};
const store = configureStore({
  reducer: {
    categories: CategorySlice,
    products: ProductSlice,
    carts: CartSlice,
  },
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== "production",
});

// setupListeners(store.dispatch);

export default store;
