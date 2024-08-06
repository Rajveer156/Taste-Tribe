import React from 'react'
import First from '../../components/First'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Popular_Dishes'
import WhoAreWe from '../../components/WhoAreWe'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Registration from '../../components/Registration'
import Footer from '../../components/Footer'



const Home = () => {
  return (
    <>
      <First/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <Registration/>
      <Footer/>
    </>
  )
}

export default Home
