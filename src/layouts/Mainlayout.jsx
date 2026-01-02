import React from 'react'
import Home from '../components/Home'

import AdvantageSection from '../components/Advantage'
import DomainSection from '../components/DomianSection'
import TabletFooter from '../components/Footer'
import VideoLogoFooterCard from '../components/Footerdown'
import TestimonialsSection from '../components/Testimonals'
import BentoGrid from '../components/BentoGrid'




const Mainlayout = () => {
  return (
    <>

   <Home/>
   <DomainSection/>
   <TestimonialsSection/>

{/* <AdvantageSection/> */}
<BentoGrid/>
{/* <TabletFooter/>
<VideoLogoFooterCard/> */}
   </>

  )
}

export default Mainlayout
