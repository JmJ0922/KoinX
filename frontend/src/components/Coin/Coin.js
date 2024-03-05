import React from 'react';
import './Coin.css';
import image from './image.svg';

const Coin = () => {
  return (
    <div className='coin'>
      <div className='items'>
        <div className='head'>
          <div className='logo'>
            <img src={image} alt="Image" width="36px" height="36px"/>
          </div>
          <div className='details'>
            <h3>Bitcoin <span>BTC</span></h3>
            <div className='rank'><span>Rank #1</span></div>
          </div>
        </div>
      </div>
      <div className='chart'>Chart</div>
    </div>
  );
};

export default Coin;
