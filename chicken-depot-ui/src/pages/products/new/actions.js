const searchTypes = {
  SEARCH_PRODUCTS: '[Search] Search Products'
}
export const searchProducts = (name) => ({
  payload: name,
  type: searchTypes.SEARCH_PRODUCTS
})

export default searchTypes
