import { all, call } from "redux-saga/effects";

import { ShopSage } from "./shop/shop.saga";
import { UserSaga } from "./user/user.saga";
import { CartSaga } from "./cart/cart.saga";

export default function* rootSaga() {
  yield all([call(ShopSage), call(UserSaga), call(CartSaga)]);
}
