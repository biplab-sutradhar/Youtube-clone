import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import MainContainer from './MainContainer'

const Body = () => {
  return (
  <>
    <div className=' flex w-full h-screen'>
      <div className='md:relative lg:relative xl:relative bg-white absolute sm:absolute z-10 max-w-52'><SideBar/></div>
      <div className='z-0 w-full' ><Outlet/></div>
    </div>
    <div className=' absolute bottom-9 right-0 '>
      
    </div>
  </>
  )
}

export default Body
