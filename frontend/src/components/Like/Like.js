// Like.js
import React, { useState, useEffect } from 'react';
import './Like.css';
import TrendingCoinCard from './TrendingCoinCard';

const Like = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        if (!response.ok) {
          throw new Error('Failed to fetch trending coins');
        }
        const data = await response.json();
        const topTrendingCoins = data.coins.slice(0, 6); // Fetching top 6 trending coins

        const coinsWithPriceIncrease = await Promise.all(topTrendingCoins.map(async (coin) => {
          const priceResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.item.id}/market_chart?vs_currency=usd&days=1`);
          const priceData = await priceResponse.json();
          const prices = priceData.prices;
          const currentPrice = prices[prices.length - 1][1];
          const previousPrice = prices[0][1];
          const priceIncrease = ((currentPrice - previousPrice) / previousPrice) * 100;
          return { ...coin.item, priceIncrease, currentPrice, priceChange: coin.item.price_change_percentage_24h };
        }));
        setTrendingCoins(coinsWithPriceIncrease);
      } catch (error) {
        console.log('Error fetching trending coins', error)
      }
    };
    fetchTrendingCoins();
  }, []);

  return (
    <div className='like'>
      <div className='items-n'>
        <h3>You May Also Like </h3>
        <div className='all'>
          <div>
            <div>
              <div className='card-container'>
                {trendingCoins.map((coin, index) => (
                  <TrendingCoinCard key={index} coin={coin} />
                ))}
              </div>
            </div>
          </div>
          <h3>Trending Coins</h3>
          <div>
            <div>
              <div className='card-container'>
                {trendingCoins.map((coin, index) => (
                  <TrendingCoinCard key={index} coin={coin} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Like;
