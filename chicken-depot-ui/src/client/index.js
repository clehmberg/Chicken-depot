import { ApolloClient, createNetworkInterface } from 'react-apollo'


const networkInterface = createNetworkInterface ({
    uri: 'https://api.graph.cool/simple/v1/cjasnlapx10ab0178w5pkk0n4'
  })
const client = new ApolloClient({
  networkInterface
})

export default client