import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import Side from '../../components/Side/Side'
import Right from '../Right/Right'
import Like from '../../components/Like/Like'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <div>
        <p>Cryptocurrencies  &gt;&gt; <b>Bitcoin</b></p>
        </div>
        <div className='down'>
        <div>
        <Right/>
        </div>
        <div className='side'>
            <Side/>
        </div>
        <Like/>
        </div>

    </div>
  )
}

export default Home