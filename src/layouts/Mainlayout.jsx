import React from 'react'
import Home from '../components/Home'
import DomainSection from '../components/DomianSection'
import Testimonials from '../components/Testimonals'
import MembershipBento from '../components/BentoGrid'
import HowItWorks from '../components/HowItWorks'

const MainLayout = () => {
  return (
    <div>
      <Home/>
      <DomainSection/>
      <Testimonials/>
      <HowItWorks/>
      <MembershipBento/>
    </div>
  )
}

export default MainLayout
