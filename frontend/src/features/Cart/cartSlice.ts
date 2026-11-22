import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, ProductType } from "../../types/types";

interface CartState {
  cartItems: Record<string, CartItem>,
  cartItemsId: string[],
  total: number,
}

const initialState: CartState = {
  cartItems: {},
  cartItemsId: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ product: ProductType, quantity: number }>) => {
      const id = action.payload.product.id;
      if (state.cartItems[id]) {
        state.cartItems[id].quantity += action.payload.quantity;
      } else {
        state.cartItems[id] = action.payload;
        state.cartItemsId.push(id);
      }
      state.total += action.payload.product.price * action.payload.quantity;
    },
    setProductQuantity: (state, action: PayloadAction<{ productId: string, newQuantity: number }>) => {
      const id = action.payload.productId;
      if (!state.cartItems[id]) {
        return;
      }
      if (action.payload.newQuantity < 1 || action.payload.newQuantity > state.cartItems[id].product.stockQuantity) {
        console.error('Invalid quantity was attempted to set');
        return;
      }
      const oldQuantity = state.cartItems[id].quantity;
      state.total += (action.payload.newQuantity - oldQuantity) * state.cartItems[id].product.price;
      state.cartItems[id].quantity = action.payload.newQuantity;
    },
    removeProduct: (state, action: PayloadAction<{ productId: string }>) => {
      const id = action.payload.productId;
      if (!state.cartItems[id]) {
        return;
      }
      const oldQuantity = state.cartItems[id].quantity;
      state.total -= state.cartItems[id].product.price * oldQuantity;
      state.cartItems[id].quantity = 0;
      delete state.cartItems[id];
      state.cartItemsId = state.cartItemsId.filter((itemId) => itemId !== id);
    },
  },
});

export const { addProduct, setProductQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;