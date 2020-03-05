import React from "react";
import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../component/preview-collection/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
