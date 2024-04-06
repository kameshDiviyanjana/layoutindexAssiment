import React from 'react'

import { useLocation } from 'react-router-dom'

function Home() {
  const cathcdta = useLocation()

  return (
    <>
    <div className=' w-full'>
    <h1> hww : {cathcdta.state?.id}</h1>
    </div>
   
    </>
  )
}

export default Home
