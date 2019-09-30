import UserActionType from "./user.type";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionType.SIGN_OUT_FAILURE:
    case UserActionType.SIGN_IN_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload
      };
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionType.SIGN_UP_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
