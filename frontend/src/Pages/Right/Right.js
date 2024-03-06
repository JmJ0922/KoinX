import React,{useState} from 'react'
import './Right.css'
import Coin from '../../components/Coin/Coin'
import Performance from '../../components/Performance/Performance'
import Sentiment from '../../components/Sentiment/Sentiment'
import About from '../../components/About/About'
import Team from '../../components/Team/Team'
import Tokenomics from '../../components/Tokenomics/Tokenomics'


const Right = () => {
  const [activeItem, setActiveItem] = useState('overview'); // State to track active menu item

  // Function to handle click event on menu items
  const handleItemClick = (itemId) => {
    setActiveItem(itemId); // Update active menu item
  };

  return (
    <div className='Right'>
    <Coin/>
    <div className="navbar">
      <span
        className={`nav-item ${activeItem === 'overview' ? 'active' : ''}`} 
        onClick={() => handleItemClick('overview')}
      >
        Overview
      </span>
      <span
        className={`nav-item ${activeItem === 'fundamentals' ? 'active' : ''}`} 
        onClick={() => handleItemClick('fundamentals')}
      >
        Fundamentals
      </span>
      <span
        className={`nav-item ${activeItem === 'news' ? 'active' : ''}`} 
        onClick={() => handleItemClick('news')}
      >
        News Insights
      </span>
      <span
        className={`nav-item ${activeItem === 'sentiments' ? 'active' : ''}`} 
        onClick={() => handleItemClick('sentiments')}
      >
        Sentiments
      </span>
      <span
        className={`nav-item ${activeItem === 'team' ? 'active' : ''}`} 
        onClick={() => handleItemClick('team')}
      >
        Team
      </span>
      <span
        className={`nav-item ${activeItem === 'technicals' ? 'active' : ''}`} 
        onClick={() => handleItemClick('technicals')}
      >
        Technicals
      </span>
      <span
        className={`nav-item ${activeItem === 'tokenomics' ? 'active' : ''}`} 
        onClick={() => handleItemClick('tokenomics')}
      >
        Tokenomics
      </span>
    </div>
    <Performance/>
    <Sentiment/>
    <About/>
    <Tokenomics/>
    <Team/>
    </div>
  )
}

export default Right




