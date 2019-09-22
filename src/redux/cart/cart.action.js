import { cartActionType } from "./cart.type";

export const toggleCartHidden = () => ({
  type: cartActionType.HIDE_CART_DROPDOWN
});

export const itemAdd = item => ({
  type: cartActionType.ADD_TO_CART,
  payload: item
});

export const itemRemove = item => ({
  type: cartActionType.REMOVE_TO_CART,
  payload: item
});

export const decreaseQuantity = item => ({
  type: cartActionType.DECREASE_QUANTITY,
  payload: item
});
