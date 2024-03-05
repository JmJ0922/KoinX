import React from 'react'
import './Right.css'
import Coin from '../../components/Coin/Coin'
import Performance from '../../components/Performance/Performance'
import Sentiment from '../../components/Sentiment/Sentiment'
import About from '../../components/About/About'
import Team from '../../components/Team/Team'
import Tokenomics from '../../components/Tokenomics/Tokenomics'


const Right = () => {
  return (
    <div className='Right'>
    <Coin/>
    <Performance/>
    <Sentiment/>
    <About/>
    <Tokenomics/>
    <Team/>
    </div>
  )
}

export default Right