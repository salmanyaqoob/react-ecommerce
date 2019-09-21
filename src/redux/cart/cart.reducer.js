import { cartActionType, cartItemsActionType } from "./cart.type";
import { addItemToCart } from "./cart.util";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.HIDE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartItemsActionType.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
