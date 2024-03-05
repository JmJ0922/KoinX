import React from 'react'
import  image  from './image.svg';
import  image2  from './image2.svg';
import Slides from '../Slides/Slides';
import './Sentiment.css'

const Sentiment = () => {
  return (
    <div className='sentiment'>
    <div className='items'>
    <h3>Sentiment</h3>
    <div>
    <p style={{ display: 'inline-block', marginRight: '5px' }}>Key Events</p>
<img src={image2} alt="Image" width="15px" height="20px" style={{ verticalAlign: 'middle' }} />
</div>
      <div className='slider'>
        <Slides/>
      </div>
      <div>
      <p style={{ display: 'inline-block', marginRight: '5px' }}>Analyst Estimates</p>
<img src={image2} alt="Image" width="15px" height="20px" style={{ verticalAlign: 'middle' }} />
</div>
      <div>
      <img src={image} alt="Image" width="710px" height="186px"/>
      </div>
</div>
    </div>
  )
}

export default Sentiment