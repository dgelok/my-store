import React from 'react'
import { Link } from 'react-router-dom'
import {Nav, Form, Navbar, Button, FormControl} from 'react-bootstrap'

const BaseLayout = (props) => {
  return (
    <>
    
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Groceries.io</Navbar.Brand>
    <Nav className="mr-auto pl-2">
        {/* <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
        {/* <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Cart">Shop</Nav.Link>
        <Nav.Link href="/Checkout">Checkout</Nav.Link> */}
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/Shop">Shop</Link>
        <Link className="nav-link" to="/Checkout">Checkout</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
      
      {props.children}
    </>
  )
}

export default BaseLayout
