import React, { useEffect, useState } from 'react'
import './Performance.css'
import  image2  from './image2.svg';
import Graph from '../Graph/graph';

const Performance = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  const [sevenDayLowHigh, setSevenDayLowHigh] = useState(null);

  useEffect(() => {
    const fetchBitcoinHistoricalData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin historical data');
        }
        const data = await response.json();
        const prices = data.prices.map(([timestamp, price]) => price);
        const low = Math.min(...prices);
        const high = Math.max(...prices);
        setSevenDayLowHigh({ low, high });
      } catch (error) {
        console.error('Error fetching Bitcoin historical data:', error);
      }
    };

    fetchBitcoinHistoricalData();
  }, []);

  useEffect(()=>{
    const fetchBitcoinData = async () => {
      try{
        const respons = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
        if(!respons.ok){
          throw new Error('Failed to fetch Bitcoin data');
        }
        const data = await respons.json();
        setBitcoinData(data)
      }catch(error){
        console.error('Error fetching Bitcoin data:', error);
      }
    }
    fetchBitcoinData();
  },[])

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }

  const formatPercentage = (percentage) => {
    return parseFloat(percentage).toFixed(1) +'%' 
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className='perform'>
    <div className='items'>
    <div>
    <h3>Performance</h3>
    <div><Graph/></div>
    </div>
    <br/>
    <br/>
    <div><p style={{ display: 'inline-block', marginRight: '5px' }}>Fundamentals</p>
<img src={image2} alt="Image" width="15px" height="20px" style={{ verticalAlign: 'middle' }} /></div>
    </div>
    <div className='fund'>
        <div className='one-side'>
          <p>Bitcoin Price</p>
          {bitcoinData ? (
  <span>{formatPrice(bitcoinData.market_data.current_price.usd)}</span>
) : (
  <span>N/A</span>
)}
<div className="line"></div>

          <p>24h Low / 24h High</p>
          
          {bitcoinData ? (
  <span>
    {formatPrice(bitcoinData.market_data.low_24h.usd)} /{' '}
    {formatPrice(bitcoinData.market_data.high_24h.usd)}
  </span>
) : (
  <span>N/A / N/A</span>
)} 
<div className="line"></div>

          <p>7d Low / 7d High</p>
          {sevenDayLowHigh ? (
  <span>${sevenDayLowHigh.low.toFixed(2)} / ${sevenDayLowHigh.high.toFixed(2)}</span>
) : (
  <span>N/A</span> 
)}<div className="line"></div>

          <p>Trading Volume</p>
          {bitcoinData ? (
  <span>{formatPrice(bitcoinData.market_data.total_volume.usd)}</span>
) : (
  <span>N/A</span>
)}<div className="line"></div>

          <p>Market Cap Rank</p>
          {bitcoinData ? (
  <span>#{bitcoinData.market_cap_rank}</span>
) : (
  <span>N/A</span> 
)}
<div className="line"></div>
        </div>
        <div className='one-side'>
          <p>Market Cap</p>
          {bitcoinData ? (
  <span>{formatPrice(bitcoinData.market_data.market_cap.usd)}</span>
) : (
  <span>N/A</span>
)}<div className="line"></div>

          <p>Market Cap Dominance</p>
          {bitcoinData && bitcoinData.market_cap_percentage ? (
  <span>{bitcoinData.market_cap_percentage}%</span>
) : (
  <span>38.343%</span>
)}
<div className="line"></div>

          <p>Volume / Market Cap</p>
          {bitcoinData && bitcoinData.market_cap && bitcoinData.total_volume ? (
  <span>{(bitcoinData.total_volume / bitcoinData.market_cap * 100).toFixed(2)}%</span>
) : (
  <span>0.0718</span>
)}<div className="line"></div>

          <p>All-Time High</p>
          {bitcoinData ? (
  <span>
    {formatPrice(bitcoinData.market_data.ath.usd)} ({formatPercentage(bitcoinData.market_data.ath_change_percentage.usd)})
  </span>
) : (
  <span>N/A</span>
)}<div className="line"></div>

          <p>All-Time Low</p>
          {bitcoinData ? (
  <span>
    {formatPrice(bitcoinData.market_data.atl.usd)} (
    {formatPercentage(bitcoinData.market_data.atl_change_percentage.usd)})
  </span>
) : (
  <span>N/A</span>
)}<div className="line"></div>

        </div>
      </div>
    </div>
  )
}

export default Performance