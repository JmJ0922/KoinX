import React, { useEffect, useState } from 'react';
import './Coin.css';
import image from './image.svg';
import TradingViewWidget from '../TradingView/TradingViewWidget';


const Coin = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin data');
        }
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBitcoinData();
  }, []);


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
      <div>
        {bitcoinData && (
          <div className='total'>
  <div className='Price'>
    <p className='dollar'>${bitcoinData.usd}</p>
    <p className={`change ${bitcoinData.usd_24h_change >= 0 ? 'positive' : 'negative'}`}>{bitcoinData.usd_24h_change}%</p><span className='hour'>(24H)</span>
  </div>
  
    <p className='inr'>₹{bitcoinData.inr}</p>
  
</div>

        )}
        <hr/>
      </div>
      <div className='chart'>
        <TradingViewWidget/>
      </div>
    </div>
  );
};

export default Coin;
