import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductCard from './product-card/component'
import { Col, Row } from 'reactstrap'
import { addToCart } from '../cart/actions'
import client from '../../client'
import { setupProducts, deleteProduct  } from './actions'
import { gql } from 'react-apollo'
import { push } from 'redux-little-router'


export class Layout extends Component {
  componentWillMount () {
    client.query({
      query: gql`
        {
          allProducts {
            id
            cardTitle
            image
            price
            description
          }
        }
      `,
      fetchPolicy: 'network-only'
    }).then((resp) => {
      this.props.dispatch(setupProducts(resp.data.allProducts))
    })
  }

  handleDeleteProduct = (product) => {
    client.mutate({
      mutation: gql`
        mutation deleteProduct($id: ID!) {
          deleteProduct(id: $id) {
            id
          }
        }
      `,
      variables: {
        id: product.id
      },
      fetchPolicy: 'network-only'
    }).then(() => {
      this.props.dispatch(deleteProduct(product))
    })
  }

  handleAddToCart = (product) => {
    this.props.dispatch(addToCart(product))
  }

  handleRedirectToUpdate = (product) => {
    this.props.dispatch(push(`/products/${product.id}/update`))
  }


  render() {
    const products = this.props.products.map((product) => (
      <Col key={product.id}>
        <ProductCard onRedirectToUpdate={this.handleRedirectToUpdate} onAddToCart={this.handleAddToCart}  onDeleteProduct={this.handleDeleteProduct} product={product}/>
      </Col>
    ))

    return(
      <div className="products-container">
        <Row>
        {products}
        </Row>
      </div>

    )
  }
}


const mapStateToProps = (state) => ({
  products: state.products.data
})

export default connect(mapStateToProps)(Layout)