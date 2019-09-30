import { call, put, all, takeLatest } from "redux-saga/effects";

import UserActionType from "../user/user.type";
import { cartClear } from "./cart.action";

export function* clearCartOnSignOut() {
  yield put(cartClear());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionType.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* CartSaga() {
  yield all([call(onSignOutSuccess)]);
}
