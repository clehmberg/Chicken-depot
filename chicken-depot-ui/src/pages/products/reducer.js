import productsActions from './actions'


const initialState = {
  data: []

}
export default (state = initialState, action) => {
  switch (action.type) {
    case productsActions.SETUP_PRODUCTS:
      return {
        data: action.payload
      }
    case productsActions.CLEAR_FORM:
      return {
        data: [ ]
      }
    case productsActions.DELETE_PRODUCT:
      return {
        data: state.data.filter((product) => product.id !== action.payload.id)
      }
    case productsActions.UPDATE_PRODUCT:
      return {
        data: action.payload
      }
    default:
      return state
  }
}
