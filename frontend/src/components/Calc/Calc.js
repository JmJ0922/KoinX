import React from 'react'
import  image  from './image.svg';
import  image2  from './image2.svg';
import './Calc.css'

const Calc = () => {
  return (
    <div className='calc'>
        <div className='first2'>
        <div>
        <img src={image} alt="Image" width="128px" height="128px"/></div>
        <div>
            <p>Calculate your <br/>Profits</p>
            <button className='btn'><span>Check Now  </span> <span className="arrow">&rarr;</span></button>
        </div>

        </div>
        <div className='second2'>
        <div>
        <img src={image2} alt="Image" width="128px" height="128px"/></div>
        <div>
            <p>Calculate your tax <br/>liability</p>
            <button className='btn'><span>Check Now  </span> <span className="arrow">&rarr;</span></button>
        </div>
        </div>
    </div>
  )
}

export default Calc