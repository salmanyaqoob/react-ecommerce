import { cartActionType, cartItemsActionType } from "./cart.type";

export const toggleCartHidden = () => ({
  type: cartActionType.HIDE_CART_DROPDOWN
});

export const itemAdd = item => ({
  type: cartItemsActionType.ADD_TO_CART,
  payload: item
});
