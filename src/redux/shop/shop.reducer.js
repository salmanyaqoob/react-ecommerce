import SHOP_DATA from "./shop.data";
import shopActionType from "./shop.actions";
const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionType.GET_COLLECTION_BY_ID:
      return state.collections.filter(
        collection => collection.id === action.payload.id
      );
    default:
      return state;
  }
};

export default shopReducer;
