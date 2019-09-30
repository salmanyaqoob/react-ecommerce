import { cartActionType } from "./cart.type";
import {
  addItemToCart,
  removeItemToCart,
  decreaseItemQuantity
} from "./cart.util";

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
    case cartActionType.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case cartActionType.REMOVE_TO_CART:
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload)
      };
    case cartActionType.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload)
      };
    case cartActionType.CART_CLEAR:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default cartReducer;
