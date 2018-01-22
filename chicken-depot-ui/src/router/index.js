import { routerForBrowser } from 'redux-little-router'

const routes = {
  '/': {
    title: '/'
  },
  '/products': {
    title: 'Product List',
    '/new': {
      title: 'Products New',
    },

  },
  '/products/:id/update': {
    title: 'Update Products'
  },
  '/cart': {
    title: 'Cart'
  }
}

const {reducer, middleware, enhancer} = routerForBrowser({routes})

export default {
  reducer,
  middleware,
  enhancer
}