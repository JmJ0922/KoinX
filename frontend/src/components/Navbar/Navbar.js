import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
        <h1>KoinX</h1>
        <nav>
            <div className='special'>
                <span>Crypto Taxes</span>
                <span>Free Tools</span>
                <span>Resource Center</span>   
            </div>
            <button>Get Started</button>
        </nav>
    </div>
  )
}

export default Navbar