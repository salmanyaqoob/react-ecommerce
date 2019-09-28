import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
    console.log("under shop did mount");

    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // this.unsubcribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionMap = convertCollectionToMap(snapshot);
    //   updateCollections(collectionMap);
    //   this.setState({
    //     loading: false
    //   });
    // });
    // collectionRef.get().then(async snapshot => {
    //   const collectionMap = convertCollectionToMap(snapshot);
    //   updateCollections(collectionMap);
    //   this.setState({
    //     loading: false
    //   });
    // });
  }

  componentWillUnmount() {}

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
