import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
