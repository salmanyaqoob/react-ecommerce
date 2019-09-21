import React from "react";
import { connect } from "react-redux";

import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";

import { itemAdd } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, itemAdd }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        value="Add to Cart"
        onClick={() => itemAdd(item)}
        inverted
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  itemAdd: item => dispatch(itemAdd(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
