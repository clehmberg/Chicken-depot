const actionTypes = {
  ADD_TO_CART: '[Cart] Add To Cart',
  REMOVE_PRODUCT: '[Cart] Remove Product',
  CLEAR_CART: '[Cart] Clear Cart'
}
export const addToCart = (product) => ({
  payload: product,
  type: actionTypes.ADD_TO_CART
})

export const removeProduct = (product) => ({
  payload: product,
  type: actionTypes.REMOVE_PRODUCT
})
export const clearCart = () => ({
  type: actionTypes.CLEAR_CART
})

export default actionTypes