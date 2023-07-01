export const setCart = (data) => {
  const serializedArray = JSON.stringify(data);
  localStorage.setItem("cart", serializedArray);
};

export const addToCart = (newCartItem) => {
  const cart = JSON.parse(
    localStorage.getItem("cart") || []
  );
  cart.push(newCartItem);
  setCart(cart);
};
