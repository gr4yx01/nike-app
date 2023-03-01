import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryPrice: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;

      state.items.push({ product: newProduct, quantity: 1 });
    },
    changeQuantity: (state, action) => {},
  },
});

export const selectNumberOfItems = (state) => state?.cart?.items.length;

export const selectSubtotal = (state) =>
  state.cart.items.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );

export const selectSelf = (state) => state.cart;

export const selectDeliveryPrice = createSelector(
  selectSelf,
  selectSubtotal,
  (state, subtotal) =>
    subtotal > state.freeDeliveryFrom ? 0 : state.deliveryPrice
);

export const selectTotal = createSelector(
  selectSubtotal,
  selectDeliveryPrice,
  (subtotal, delivery) => subtotal + delivery
);
