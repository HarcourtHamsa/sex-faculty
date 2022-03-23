import { ADD_TO_CART } from "./constants";

export const addToCart = (payload) => {
  console.log("payload from action: ", payload);
  
  return {
    type: ADD_TO_CART,
    payload,
  };
};
