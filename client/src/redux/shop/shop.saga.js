import { all, call, put, takeLatest } from "redux-saga/effects";
import ShopActionType from "./shop.types";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";
import {
  firestore,
  convertCollectionToMap
} from "../../firebase/firebase.util";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionToMap, snapShot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionType.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* ShopSage() {
  yield all([call(fetchCollectionsStart)]);
}
