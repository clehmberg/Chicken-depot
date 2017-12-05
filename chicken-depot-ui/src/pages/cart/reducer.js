import cartActionTypes from './actions'
const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      const product = action.payload
      return {
        products: [ product, ...state.products ]
      }
    case cartActionTypes.REMOVE_PRODUCT:
      return {
        products: state.products.filter((product) => product.id !== action.payload.id)
      }
    case cartActionTypes.CLEAR_CART:
      return {
        products: []
      }
    default:
      return state
  }
}