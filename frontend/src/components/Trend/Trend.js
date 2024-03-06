import React, { useState, useEffect } from 'react'
import './Trend.css'

const Trend = () => {
    const [trendingCoins, setTrendingCoins] = useState([])

    useEffect(()=>{
        const fetchTrendingCoins = async () => {
            try{
                const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
                if(!response.ok){
                    throw new Error('Failed to fetch trending coins');
                }
                const data= await response.json();
                const topTrendingCoins = data.coins.slice(0, 3);

                const coinsWithPriceIncrease = await Promise.all(topTrendingCoins.map(async(coin)=>{
                    const priceResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.item.id}/market_chart?vs_currency=usd&days=1`);
                    const priceData = await priceResponse.json();
                    const prices = priceData.prices;
                    const currentPrice = prices[prices.length -1 ][1];
                    const previousPrice = prices[0][1];
                    const priceIncrease = ((currentPrice - previousPrice )/previousPrice)*100;
                    return {...coin, priceIncrease};
                }));
                setTrendingCoins(coinsWithPriceIncrease);
            } catch (error){
                console.log('Error fetching trending coins', error)
            }
        };
        fetchTrendingCoins();
    }, [])


  return (
    <div className='trending'>
        <p>Trending Coins (24h)</p>
        <ul>
        {trendingCoins.map((coin, index) => (
    <li key={index}>
        <img src={coin.item?.large ?? 'default_large_image_url'} alt={coin.item?.symbol ?? 'N/A'} width="20" height="20" /> 
        {coin.item?.name ?? 'Unknown'}  
        <span className={coin.priceIncrease >= 0 ? 'increase' : 'decrease'}>
            {Math.abs(coin.priceIncrease ?? 0).toFixed(2)}%
        </span>
    </li>
))}

        </ul>
    </div>
  )
}

export default Trend