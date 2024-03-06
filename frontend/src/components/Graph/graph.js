import React, { useState, useEffect } from 'react';
import './graph.css'; // Import your CSS file for styling

const Graph = () => {
    const [low, setLow] = useState(null);
    const [high, setHigh] = useState(null);
    const [currentPrice, setCurrentPrice] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1'
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch Bitcoin data');
                }
                const data = await response.json();
                const prices = data.prices.map(([timestamp, price]) => price);
                setLow(Math.min(...prices));
                setHigh(Math.max(...prices));
            } catch (error) {
                console.error('Error fetching Bitcoin data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSliderChange = (event) => {
        setCurrentPrice(parseFloat(event.target.value));
    };

    return (
        <div className="graph-container">
            <div className="align">
                <div className="paragraph">
                    <p className='high'>Today's Low</p>
                    <p className='low'>{low}</p>
                </div>
                <div className="slider-container">
                    <input
                        type="range"
                        min={low || 0}
                        max={high || 100}
                        value={currentPrice || 0}
                        onChange={handleSliderChange}
                        className="range-slider"
                    />
                    {currentPrice != null && <div className="price-indicator">${currentPrice.toFixed(2)}</div>}
                </div>
                <div className="paragraph">
                    <p className='high'>Today's High</p>
                    <p className='low'>{high}</p>
                </div>
            </div>
            <div className="align">
                <div className="paragraph">
                    <p className='high'>52W Low</p>
                    <p className='low'>{low}</p>
                </div>
                <div className="slider-container">
                    <input
                        type="range"
                        min={low || 0}
                        max={high || 100}
                        value={currentPrice || 0}
                        onChange={handleSliderChange}
                        className="range-slider"
                    />
                    {currentPrice != null && <div className="price-indicator">${currentPrice.toFixed(2)}</div>}
                </div>
                <div className="paragraph">
                    <p className='high'>52W High</p>
                    <p className='low'>{high}</p>
                </div>
            </div>
        </div>
    );
};

export default Graph;

