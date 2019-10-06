import React from "react";
import { connect } from "react-redux";

import "./collection-item.style.scss";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  AddButton
} from "./collection-item.style";

import { itemAdd } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, itemAdd }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></ImageContainer>
      <CollectionFooterContainer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </CollectionFooterContainer>
      <AddButton value="Add to Cart" onClick={() => itemAdd(item)} inverted />
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  itemAdd: item => dispatch(itemAdd(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
