import UserActionType from "./user.type";

export const setCurrentUser = user => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionType.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = EmailAndPassword => ({
  type: UserActionType.EMAIL_SIGN_IN_START,
  payload: EmailAndPassword
});

export const signInSuccess = user => ({
  type: UserActionType.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionType.SIGN_IN_FAILURE,
  payload: error.message
});

export const checkUserSession = () => ({
  type: UserActionType.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionType.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionType.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionType.SIGN_OUT_FAILURE,
  payload: error.message
});

export const signUpStart = UserInput => ({
  type: UserActionType.SIGN_UP_START,
  payload: UserInput
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionType.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: UserActionType.SIGN_UP_FAILURE,
  payload: error
});
