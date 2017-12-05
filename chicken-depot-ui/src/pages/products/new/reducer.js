import searchProducts from './actions'

const initialState = {
  search: []
}

  export default (state = initialState, action) => {
    switch (action.type) {
      case searchProducts.SEARCH_PRODUCTS:
        return {
          products: state.products.filter((product) => product.id !== action.payload.id),
          search: action.payload
        }
      default:
        return state
    }

}
