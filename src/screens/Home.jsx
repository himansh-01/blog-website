import React from 'react';
import Header2 from '../components/Header2';
import Nav from '../components/Nav';
import Hero from '../components/Hero'

function Home() {
  return (
    <>
    <Header2 />
    <div className='flex space-x-2'>
      <Nav />
      <Hero />
    </div>
    </>
  )
}

export default Home