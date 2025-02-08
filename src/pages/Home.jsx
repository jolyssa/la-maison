import React from 'react'
import Hero from '../components/Home/Hero'
import InfoCards from '../components/Home/InfoCards'

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="relative -mt-48">
        <InfoCards />
      </div>
    </div>
  )
}

export default Home