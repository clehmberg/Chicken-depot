import React from 'react'
import {shallow} from 'enzyme'
import ProductCard from './component'
import { CardBody } from 'reactstrap'


// it(`renders correctly`, () => {
//   const product = {cardTitle: 'Test Product'}
//   const wrapped = shallow(<ProductCard product={product}/>)
//   const header = wrapped.find(CardHeader)
//   expect(header.html()).toContain(product.cardTitle)
//
// })

it ('has description', () => {
  const product = {image: 'Test Card'}
  const wrapped = shallow(<ProductCard product={product}/>)
  const productText = wrapped.find(CardBody)
  expect(productText.html()).toContain(product.image)
})