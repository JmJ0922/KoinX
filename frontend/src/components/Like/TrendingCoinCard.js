// TrendingCoinCard.js
import React from 'react';
import './Like.css';

const TrendingCoinCard = ({ coin }) => {
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
    </div>
  );
}

export default TrendingCoinCard;
