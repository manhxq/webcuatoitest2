import FootBar from '@/components/FootBar'
import NavBar from '@/components/NavBar'
import React from 'react'


const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
      <FootBar></FootBar>
    </>
  )
}

export default layout