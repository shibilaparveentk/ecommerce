import React from 'react'
import Categories from '../components/Categories';
import Slide from '../components/Slide';
import Navbar from '../components/Navbar';
import Nav from '../components/Nav';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Navbar/>
      <Nav/>
      <Header/>
      <Slide/>
      <Categories/>
    </div>
  )
}

export default Home