import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import { selectShopCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";
import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer
} from "./collection.style";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="{title} Category of Crown Clothing" />
      </Helmet>
      <CollectionPageContainer>
        <TitleContainer>{title}</TitleContainer>
        <ItemsContainer>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </ItemsContainer>
      </CollectionPageContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
