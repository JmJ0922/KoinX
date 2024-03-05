import React from 'react'
import './Side.css'
import  image  from './image.svg';
import Trend from '../Trend/Trend';

const Side = () => {
  return (
    <div className='com'>
    <div className='blue'>
        <p>Get Started with KoinX for FREE</p>
        <p>With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.</p>
<div>
<img src={image} alt="Image" width="178.66px" height="166.22px"/>
</div>
<button><span>Get Started for Free  </span> <span className="arrow">&rarr;</span></button>
</div>
<div className='trend'>
    <Trend/>
</div>
    </div>
  )
}

export default Side

