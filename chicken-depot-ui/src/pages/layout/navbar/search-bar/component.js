import React, { Component } from 'react'
import { Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'

export class searchBar extends Component {

    state = {
      products: [],
      searchResults: []
    }

    handleSearchProducts = (evt) => {

      const val = evt.target.value

      this.setState({
        searchName: val,
        searchResults: this.state.products.filter((product) => product.id)
      })
    }

    componentWillMount () {
      client.query({
        query: gql`
          {
            allProducts {
              cardTitle
              description
              id
              price
              image
            }
          }
        `,
        fetchPolicy: 'network-only'
      }).then((resp) => {
        this.setState({products: resp.data.product})
      })
    }
  render () {

    return (
      <Form className="new-product-form">
        <Input type="search" onChange={this.handleSearchProducts} className="product-search" placeholder="Search Product"/>
        <Button onClick={(evt) => this.searchProducts}>Search</Button>
        {/*{searchedProducts}*/}
      </Form>
    )
  }

}