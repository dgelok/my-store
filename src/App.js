import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const App = () => {
  // let handleClick = (e) ={

  // }
  return (
    <>
      <div class="bgImage">
        <div class="hero-text">
          <h1 style={{fontSize:"50px"}}>Welcome to Groceries.io</h1>
          <h3>Let's get shopping!</h3>
          <Link to="/Shop"><button>Find Groceries</button></Link>
          
        </div>
      </div>
    </>
  )
}

export default App
