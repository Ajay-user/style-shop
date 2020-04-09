import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../Redux/shop/shop.selector";
import CollectionItem from "../../component/collection-item/collection-item.component";
import "./collection.style.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
