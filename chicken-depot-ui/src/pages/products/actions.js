const productsTypes = {
  DELETE_PRODUCT: '[Products] Delete Product',
  SETUP_PRODUCTS: '[Products] Setup Products',
  UPDATE_PRODUCT: '[Products] Update Product',
  CLEAR_FORM: '[Products] Clear Form'
}

export const setupProducts = (products) => ({
  payload: products,
  type: productsTypes.SETUP_PRODUCTS
})

export const deleteProduct = (product) => ({
  payload: product,
  type: productsTypes.DELETE_PRODUCT
})

export const updateProduct = (product) => ({
  payload: product,
  type: productsTypes.UPDATE_PRODUCT
})
export const clearForm = () => ({
    type: productsTypes.CLEAR_FORM
})

export default productsTypes