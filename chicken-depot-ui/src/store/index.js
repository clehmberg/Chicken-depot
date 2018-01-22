import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import routerItems from '../router'
import productsReducer from '../pages/products/reducer'
import cartReducer from '../pages/cart/reducer'
import client from '../client'

export default createStore(
  combineReducers({
    apollo: client.reducer(),
    cart: cartReducer,
    products: productsReducer,
    router: routerItems.reducer
  }),

  compose(
    routerItems.enhancer,
    applyMiddleware(routerItems.middleware),
    applyMiddleware(client.middleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)