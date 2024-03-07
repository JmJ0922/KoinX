import React, { useState } from 'react';
import './Like.css';

const TrendingCoinCard = ({ coin }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 5 ? 0 : prevSlide + 1)); 
  };
  
  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? 5 : prevSlide - 1)); 
  };

  return (
    <div className='card'>
      <div className='first-line'>
        <img src={coin.item?.large ?? 'default_large_image_url'} alt={coin.item?.symbol ?? 'N/A'} width="20" height="20" />
        <p>{coin.name}</p>
        <span className={coin.priceIncrease >= 0 ? 'increase' : 'decrease'}>
          {Math.abs(coin.priceIncrease ?? 0).toFixed(2)}%
        </span>
      </div>
      <div className='curr'>
        <p>${coin.currentPrice}</p>
      </div>
      <div className='gr'>
        <img src={coin.data.sparkline} alt={`${coin.name} graph`} />
      </div>
      <div className='navigation'>
        <button className='prev-btn' onClick={prevSlide}>
          &#10094;
        </button>
        <button className='next-btn' onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default TrendingCoinCard;
