import Button from '@/components/Button'
import Icons from '@/components/Icons'
import Klub from '@/components/Klub'
import WhyChoce from '@/components/WhyChoce'
import React from 'react'
import Napravleniya from '@/components/Napravleniya'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

// import Home  from '@/pages/Home'
export default function Home() {
  return (
    <div>
      <Navbar />
     
      {/* <Button/> */}
      {/* <Icons/> */}
      <Klub/>
      <WhyChoce/>
       <Napravleniya/>
       <Footer/>
    </div>
  )
}
