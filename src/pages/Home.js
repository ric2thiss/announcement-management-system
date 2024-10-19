import React from 'react'
import Navbar from '../components/Navbar';
import ContentCards from '../components/ContentCards';

function Home() {
  return (
    <>
        <main>
            <Navbar />
            <ContentCards />
            <Navbar />
        </main>
    </>
  )
}

export default Home