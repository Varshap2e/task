import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import TrendingTop from './components/TrendingTop'
import Collections from './components/Collections'
import Footer from './components/Footer'

function index() {
  return (
  
    <div>
      <section className='flex flex-col'>
      
        <NavBar />
     
        <Banner />
     
        <TrendingTop />
      
        <Collections />
      
        <Footer />
      
      </section>
    </div>
  )
}

export default index