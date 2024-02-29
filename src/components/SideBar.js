import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { MdSubscriptions } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { PiFilmSlateBold } from "react-icons/pi";
import { MdOnlinePrediction } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { RiNewspaperLine } from "react-icons/ri";
import { RiAccountBoxLine } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";
import { MdWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  //Early return
  if(!isMenuOpen) return null;

  return (
    <div className=' text-lg sideBarMain h-screen p-2 overflow-auto'>

    <div className='sideBar p-2  font-medium'>
    <Link to={"/"}> <h1 className='flex items-center'><GoHomeFill className=' m-2'/>Home</h1></Link>
    <a href={"https://www.youtube.com/shorts/"}> <h1  className='flex items-center'><SiYoutubeshorts className=' m-2'/>Shorts</h1></a>
    <Link to={"/subscriptions"}> <h1 className='flex items-center' ><MdSubscriptions className=' m-2' />Subscriptions</h1>  </Link> 
    </div>
    <hr />
    <h1 className='font-bold ps-3 flex items-center justify-start cursor-pointer'>You < MdArrowForwardIos/> </h1>
    <div className=' p-2 flex flex-col  font-medium'>
     <Link to={"/others"} className='w-full justify-start flex m-1'><RiAccountBoxLine className='text-xl me-2'/> Your channel</Link>
    <Link to={"/historyvideos"} className=' flex items-center w-full justify-start m-1'> <LuHistory className=' me-2' />History  </Link> 
     <Link className='  flex items-center w-full justify-start m-1'><MdWatchLater className='flex me-2'/>watch Later</Link>
    <Link to={"/likevideo"} className=' flex items-center w-full justify-start m-1'> <BiSolidLike  className=' me-2'/>Liked videos </Link>  
    </div>
    
    <hr />
    <Link  to={"/others"}  className='font-bold ps-3 flex items-center cursor-pointer'>Explore < MdArrowForwardIos/> </Link>

    <div className='sideBar p-2  font-medium'>
      <Link to={"/others"}  className=' flex items-center w-full justify-start m-1'><IoMdTrendingUp className=' me-2'/>Trending</Link>
      <Link to={"/others"}  className=' flex items-center w-full justify-start m-1' ><HiMiniShoppingBag  className=' me-2'/>Shopping</Link>
      <Link  to={"/others"}  className=' flex items-center w-full justify-start m-1'><IoMdMusicalNote  className=' me-2'/>Music</Link>
      <Link  to={"/others"}  className=' flex items-center w-full justify-start m-1'><PiFilmSlateBold className=' me-2'/>Flims</Link>
      <Link  to={"/others"}  className=' flex items-center w-full justify-start m-1'><MdOnlinePrediction className=' me-2'/>Live</Link>
      <Link to={"/others"}   className=' flex items-center w-full justify-start m-1'><SiYoutubegaming className=' me-2'/>Gaming</Link>
      <Link  to={"/others"}  className=' flex items-center w-full justify-start m-1'><RiNewspaperLine className=' me-2'/>News</Link>
    </div>

    <hr />
   
    </div>
  )
}

export default SideBar;
