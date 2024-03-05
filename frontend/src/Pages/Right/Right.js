import React from 'react'
import './Right.css'
import Coin from '../../components/Coin/Coin'
import Performance from '../../components/Performance/Performance'
import Sentiment from '../../components/Sentiment/Sentiment'
import About from '../../components/About/About'
import Tokenizer from '../../components/Tokenizer/Tokenizer'
import Team from '../../components/Team/Team'


const Right = () => {
  return (
    <div className='Right'>
    <Coin/>
    <Performance/>
    <Sentiment/>
    <About/>
    <Tokenizer/>
    <Team/>
    </div>
  )
}

export default Right