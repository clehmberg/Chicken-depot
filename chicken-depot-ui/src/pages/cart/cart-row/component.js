import React from 'react'
import './component.css'
import { Button } from 'reactstrap'


export default ({product, removeProduct, itemCount}) => (
  <tr>
    <td>{product.id}</td>
    <td>{product.cardTitle}</td>
    <td><img src={product.image} alt=''/></td>
    <td>{product.price}</td>
    <td>{product.description}</td>
    <td>{product.itemCount}</td>
    <td><Button color="warning" onClick={() => removeProduct(product)}>Remove Item</Button>
    </td>
  </tr>
)
