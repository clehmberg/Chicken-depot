import React, { Component } from 'react'
import './container.css'
import MainNavbar from './navbar/component'
import { connect } from 'react-redux'
import { replace, Fragment } from 'redux-little-router'
import ProductsList from '../products/container'
import Cart from '../cart/container'
import ProductsNew from '../products/new/container'
import Update from '../products/update/container'

export class Layout extends Component {
  componentWillMount () {
    if (this.props.currentPath === '/') {
      this.props.dispatch(replace({pathname: '/products'}))
    }
  }

  render () {
    return (
      <div className="layout-container">
        <MainNavbar cartCount={this.props.cartProducts.length}/>
        <Fragment forRoute="/">
          <div className={'routable-container'}>
            <Fragment forRoute="/products/new">
              <ProductsNew/>
            </Fragment>
            <Fragment forRoute="/products/:id/update">
              <Update/>
            </Fragment>
            <Fragment forRoute="/products">
              <ProductsList/>
            </Fragment>
            <Fragment forRoute="/cart">
              <Cart/>
            </Fragment>
          </div>
        </Fragment>
      </div>

    )
  }

}

const mapStateToProps = (state) => ({
  currentPath: state.router.pathname,
  cartProducts: state.cart.products
})

export default connect(mapStateToProps)(Layout)