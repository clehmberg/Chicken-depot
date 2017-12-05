import React from 'react'
import { Card, CardText, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import './component.css'




export default ({product, onAddToCart, onDeleteProduct, onRedirectToUpdate }) => (

  <Card className="card">
    <CardHeader>{product.cardTitle}</CardHeader>
    <CardBody><img src={product.image} alt=""/></CardBody>
    <CardFooter>
      <CardText>{product.price}</CardText>
      <CardText>{product.description}</CardText>
      <Button color="success" onClick={(evt) => onAddToCart(product)}>Add To Cart</Button>
      <Button color="primary" onClick={(evt) => onRedirectToUpdate(product)}>Update</Button>
      <Button type="delete" color="danger" onClick={(evt) => onDeleteProduct(product)}>Delete Item</Button>
      <CardText>Product Id# {product.id}</CardText>
    </CardFooter>
  </Card>
)