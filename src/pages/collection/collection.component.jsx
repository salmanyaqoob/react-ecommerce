import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { selectShopCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.style.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
