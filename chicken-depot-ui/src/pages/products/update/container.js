import React, {Component} from 'react'
import {Col, Form, FormGroup, Input, Label, Button} from 'reactstrap'
import {connect} from 'react-redux'
import {gql} from 'react-apollo'
import client from '../../../client'
import {push} from 'redux-little-router'


export class UpdateProduct extends Component {


  constructor(props) {
    super(props)
    this.state = {
      id: '',
      cardTitle: '',
      image: '',
      price: '',
      description: '',
      searchName: '',
      searchResults: {}
    }

  }

  clearForm = () => {
    this.setState({
      id: '',
      cardTitle: '',
      image: '',
      price: '',
      description: '',
      searchName: '',
      searchResults: []
    })
  }


  redirectToUpdate(pathname) {
    if (pathname === '/products/:id/update') {
      this.props.dispatch(push('/products/update'))
    }

  }

  async componentWillMount() {
    // console.log(this.props.pathParams.id)

    const resp = await client.query({
      query: gql`
          query Product($id: ID!) {
              Product(id: $id) {
                  id
                  cardTitle
                  image
                  price
                  description
              }}`,
      variables: {
        id: this.props.pathParams.id
      },
      fetchPolicy: 'network-only'
    });

    console.log(resp);
    const price = resp.data.Product.price || 0
    const product = {...resp.data.Product, price}

    this.setState(product)
  }


  componentWillReceiveProps(nextProps) {
    this.redirectToUpdate(nextProps.id)
  }

  handleUpdateProduct = (evt) => {
    evt.preventDefault()
    const pNumber = parseInt(this.state.price, 10)

    client.mutate({
      mutation: gql`
          mutation updateProduct($id: ID! $cardTitle: String!, $image: String, $description: String!, $price: Int) {
              updateProduct(
                  id: $id
                  cardTitle: $cardTitle
                  image: $image
                  price: $price
                  description: $description
              ) {
                  id
                  cardTitle
                  image
                  price
                  description
              }
          }
      `,
      variables: {
        ...this.state,
        price: pNumber
      },
      fetchPolicy: 'network-only'
    })
    .then((product) => {
      this.props.dispatch(push('/products'))
    })

  }


  render() {
    console.log(this.state)
    return (
      <Col>

        <Form className="new-product-form" onSubmit={this.handleUpdateProduct}>
          <FormGroup>
            <Label>Product ID#</Label>
            <Input onChange={(evt) => this.setState({id: evt.target.value})} value={this.state.id}/>
          </FormGroup>
          <FormGroup>
            <Label>Product Name</Label>
            <Input value={this.state.cardTitle}
                   onChange={(evt) => this.setState({cardTitle: evt.target.value})}/>
          </FormGroup>
          <FormGroup>
            <Label>Product Image</Label>
            <Input value={this.state.image} onChange={(evt) => this.setState({image: evt.target.value})}/>
          </FormGroup>
          <FormGroup>
            <Label>Product Price</Label>
            <Input value={this.state.price} onChange={(evt) => this.setState({price: evt.target.value})}/>
          </FormGroup>
          <FormGroup>
            <Label>Product Description</Label>
            <Input value={this.state.description}
                   onChange={(evt) => this.setState({description: evt.target.value})}/>
          </FormGroup>
          <FormGroup>
            <Button type="button" color="success" onSubmit={this.handleNewProductSubmit}>Add
              Product</Button>
            <Button type="Button" color="danger" onClick={this.clearForm}>Clear</Button>
            <Button type="submit" color="primary">Update Item</Button>
          </FormGroup>
        </Form>
      </Col>
    )
  }
}

const mapStateToProps = (state) => ({
  pathParams: state.router.params,
  products: state.products.data
})


export default connect(mapStateToProps)(UpdateProduct)
