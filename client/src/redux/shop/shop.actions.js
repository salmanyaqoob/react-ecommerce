import ShopActionType from "./shop.types";

import {
  firestore,
  convertCollectionToMap
} from "../../firebase/firebase.util";

export const updateCollections = collectionsMap => ({
  type: ShopActionType.UPDATE_COLLECTIONS,
  payload: collectionsMap
});

export const fetchCollectionStart = () => ({
  type: ShopActionType.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then(async snapshot => {
        const collectionMap = convertCollectionToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
