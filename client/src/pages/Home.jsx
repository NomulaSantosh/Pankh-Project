import React from 'react'
import Header from '../components/Header'
import Abouts from '../components/Abouts'
import Approach from '../components/Approach'
import Guided from '../components/Guided'
import Embrace from '../components/Embrace'
import BlogSection from '../components/BlogSection'
import Client from '../components/Client'
import FASection from '../components/FASection'

const Home = () => {
  return (
    <div>
        <Header />
        <Abouts />
        <Approach />
        <Guided />
        <Embrace />
        <BlogSection />
        <Client />
        <FASection />
    </div>
  )
}

export default Home