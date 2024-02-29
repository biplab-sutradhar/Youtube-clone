import React from 'react'
import ButtonList from './ButtonList'
import VideoConatiner from './VideoConatiner.js'

const MainContainer = () => {
  return (
    <div className=' shadow-md overflow-y-scroll relative h-screen'>
      <div className=' sticky top-0  z-10 ' ><ButtonList/></div>
      <div ><VideoConatiner/></div>
    </div>
  )
}

export default MainContainer
