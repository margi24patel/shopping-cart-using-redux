//reducer
import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTAL } from "./actions";
// items
import cartItems from "./cart-items";

//initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
const reducer = (state = initialStore, action) => {
  //DECREASE
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          amount: cartItem.amount - 1,
          //price: cartItem.price - action.payload.price,
        };
      }
      return cartItem;
    });
    // }
    return { ...state, cart: tempCart };
  }
  //INCREASE
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          amount: cartItem.amount + 1,
          //price: cartItem.price + action.payload.price,
        };
      }
      //console.log(cartItem);
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  //REMOVE
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  //CLEAR CART
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  //GET TOTAL
  if (action.type === GET_TOTAL) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = amount * price;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  return state;
};

export default reducer;
