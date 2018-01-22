import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './pages/layout/container'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import store from './store'
import client from './client'

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <Layout/>
  </ApolloProvider>, document.getElementById('root'))
registerServiceWorker()
