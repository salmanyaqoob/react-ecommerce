// import SHOP_DATA from "./shop.data";
import ShopActionType from "./shop.types";

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    case ShopActionType.GET_COLLECTION_BY_ID:
      return state.collections.filter(
        collection => collection.id === action.payload.id
      );
    default:
      return state;
  }
};

export default shopReducer;
