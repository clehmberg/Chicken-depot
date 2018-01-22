import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Table, Button } from 'reactstrap'
import CartRow from './cart-row/component'
import { clearCart, removeProduct } from './actions'


export class Layout extends Component {
  handleClearCart = () => {
    this.props.dispatch(clearCart())
  }

  handleRemoveProduct = (product) => {
    this.props.dispatch(removeProduct(product))
  }

  render(){
    const products = this.props.products.map((product,idx) => <CartRow removeProduct={this.handleRemoveProduct} key={idx} product={product}/>)
    return(
      <div className="products-container">
        <Row>
          <Table bordered={true} striped={true}>
            <thead>
            <tr>
              <th>ID#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
              <th>Quantity</th>
              <th><Button color="danger" onClick={this.handleClearCart}>Clear Cart</Button></th>
            </tr>
            </thead>
            <tbody>
              {products}
            </tbody>
          </Table>
        </Row>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
})

export default connect(mapStateToProps)(Layout)
