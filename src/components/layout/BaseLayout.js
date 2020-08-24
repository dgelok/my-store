import React from 'react'
import { Link } from 'react-router-dom'

const BaseLayout = (props) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/Cart">My Cart</Link>
      <Link to="/Checkout">Checkout</Link>
      {props.children}
    </>
  )
}

export default BaseLayout
