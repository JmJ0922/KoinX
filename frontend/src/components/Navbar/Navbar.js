import React from 'react'
import './Navbar.css'
import  image  from './image.svg';

const Navbar = () => {
  return (
    <div className='container'>
        
        <img className="logos" src={image} alt="Image" width="96px" height="24px"/>

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