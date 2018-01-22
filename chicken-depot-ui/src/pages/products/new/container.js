import React, {Component} from 'react'
import {Col, Form, FormGroup, Input, Label, Button} from 'reactstrap'
import './container.css'
import {connect} from 'react-redux'
import {gql} from 'react-apollo'
import client from '../../../client'
// import {push} from "redux-little-router"


export class ProductsNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      cardTitle: '',
      image: '',
      price: '',
      description: '',
      searchName: '',
      searchResults: []
    }
  }

  clearForm = () => {
    this.setState({
      id: '',
      cardTitle: '',
      image: '',
      price: '',
      description: ''
    })
  }


  handleNewProductSubmit = (evt) => {


    const {cardTitle, image, price, description} = this.state

    if (cardTitle === '' || description === '') {
      alert('Name and Description fields required')
      return false
    }
    const pNumber = parseInt(price, 10)

    client.mutate({
      mutation: gql`
          mutation createProduct($cardTitle: String!, $image: String!, $description: String!, $price: Int) {
              createProduct(
                  cardTitle: $cardTitle
                  image: $image
                  price: $price
                  description: $description
              ) {
                  cardTitle
                  image
                  price
                  description
              }
          }
      `,
      variables: {
        cardTitle,
        image,
        price: pNumber,
        description
      },
      fetchPolicy: 'network-only'
    })
    alert('Product added to Database')
  }

  render() {
    // const product = this.props.products.map((product, id) => product = {product})
    return (
      <Col>


        <Form className="new-product-form" onSubmit={this.handleNewProductSubmit}>

          <FormGroup>
            <Label>Product Name</Label>
            <Input onChange={(evt) => this.setState({cardTitle: evt.target.value})}/>
          </FormGroup>
          <FormGroup>
            <Label>Product Image</Label>
            <Input onChange={(evt) => this.setState({image: evt.target.value})}/>
          </FormGroup>
          <FormGroup>
            <Label>Product Price</Label>
            <Input onChange={(evt) => this.setState({price: evt.target.value})}/>
          </FormGroup>
          <FormGroup>
            <Label>Product Description</Label>
            <Input onChange={(evt) => this.setState({description: evt.target.value})}/>
          </FormGroup>
          <FormGroup>
            <Button type="submit" color="success">Add Product</Button>
            <Button type="reset" color="danger" onClick={this.clearForm}>Clear</Button>
          </FormGroup>
        </Form>
      </Col>
    )
  }
}

export const
  mapStateToProps = (state) => ({
    products: state.products.data,
    product: state.data
  })

export default connect(mapStateToProps)(ProductsNew)

