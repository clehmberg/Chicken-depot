import React from 'react'
import {Nav, NavbarBrand, Navbar} from 'reactstrap'
import {Link} from 'redux-little-router'
import '../container.css'


export default ({cartCount}) => (
  <Navbar dark={true} className={"bg-dark"}>
    <NavbarBrand className="nav-bar">Clint's Chicken Depot</NavbarBrand>
    {/*<Form inline>*/}
      {/*<FormGroup>*/}
      {/*<Input type="userName" name="userName" id="userName" placeholder="user name"/>*/}
      {/*<Input type="password" name="password" id="password" placeholder="password"/>*/}
      {/*<Button>Submit</Button>*/}
      {/*</FormGroup>*/}
    {/*</Form>*/}
    <Nav>
      <Link href="/products" className="nav-link">Products</Link>
      <Link href="/products/new" className="nav-link">New Products</Link>
      <Link href="/cart" className="nav-link">Cart({cartCount})</Link>
    </Nav>
  </Navbar>
)