import React, { Component } from 'react'
import { Col } from 'reactstrap'
import { UpdateProducts } from './container'
import { connect } from 'react-redux'
import { mapStateToProps } from '../new/container'


class Update extends Component {
  render () {
    return (
      <Col>
        <UpdateProducts />
      </Col>
    )
  }
}
export default connect(mapStateToProps)(Update)