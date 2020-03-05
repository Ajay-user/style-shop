import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INTIAL_STATE = {
  hidden: true,
  cartItem: []
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
