import { createSelector } from "reselect";

// const MAP_COLLECTION_ID = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
export const selectShopCollectionForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectShopCollection = collectionUrlParams =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParams]
  );

export const selectShopItems = createSelector(
  [selectShopCollections],
  collections => collections.items
);
