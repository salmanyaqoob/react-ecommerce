import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
  <div>
    <Helmet>
      <title>Shop</title>
      <meta name="description" content="Shop of Crown Clothing" />
    </Helmet>
    <div className="collection-overview">
      {collections.map(collection => {
        const { id } = collection;
        return <CollectionPreview key={id} {...collection} />;
      })}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
