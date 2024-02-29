import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './utils/VideoSlice'; 
import { closeMenu } from './utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './commentsContainer';
import LiveChat from './LiveChat';
import { PiGitlabLogoFill } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiShareFat } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { ShimmerTitle } from './others/Shimmer';
import ChannelIdVideo from './ChannelIdVideo';
import Thumbnail from './Thumbnail';
import { subscribeCar } from './utils/SubscribeSlice'; 
import { addToHistory } from './history/historySlice';

var id,channelId;
const WatchPage = () => {
const [ videoData, setVideoData] = useState([])
  
  const [ searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  id = searchParams.get("v");
  channelId = videoData[0]?.snippet?.channelId;
  

  const getVideoData = async () => {
    try {
      const data = await fetch( `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyDcEWjckGSrvzU0ROolSTKKYB2U3XLyk3Q`);
      const json = await data.json();
      setVideoData(json.items);
      
    } catch (error) {
      console.error('Error fetching videos:', error.message);
    }
  };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.video.cart);
  const subscribed = useSelector((state) => state.subscribe.cart);
  
  const isLiked = cart.includes(id);
  const isSubscribed = subscribed.includes(videoData[0]?.snippet?.channelId);

  useEffect(() => {
    dispatch( closeMenu())
  })

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    dispatch(addToCart({ id }));
  };

  const handleSubscribe = ( ) => {
    dispatch(subscribeCar({ id: videoData[0]?.snippet?.channelId }));
  }

  useEffect(() => {
    getVideoData();
    dispatch(addToHistory(id));
  }, []);
  // console.log(videoData[0]);

  return (
  <div className='w-screen flex flex-wrap flex-col'>
    <div className='flex flex-wrap'>
    <div className=' sm:w-10/12 md:w-10/12 lg:w-8/12 xl:w-8/12 w-10/12 justify-center m-2'>
      
    <div className=" rounded-xl relative block  pb-[56.25%] ">
  <iframe
    className="absolute top-0 left-0 rounded-xl w-full h-full"
    src={`https://www.youtube.com/embed/${id}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
  </div>
  <div className=' my-2 ' >
   <div className=' flex ' >
      <h1 className=' w-full text-xl font-bold'>
        { !videoData ? <ShimmerTitle/> : videoData[0]?.snippet?.title}</h1>
    </div>
  <div className='flex justify-between flex-wrap m-1'>
    <div className=' w-[420px] flex items-center justify-between my-2'>
      <div className='flex justify-between'>
         <div className='mr-2'> { videoData[0] ? <Thumbnail channelId={videoData[0]?.snippet?.channelId}/> : <PiGitlabLogoFill className='h-10 me-1 w-10'/>}   </div>  
        <div>
          <h1 className=' text-lg font-semibold '>{videoData[0] ?  videoData[0]?.snippet?.channelTitle : "ChanneName"}</h1>
          <p className=' text-xs'>200k Subscribers</p>
          </div>
          </div> 
          <div className='  flex justify-center items-center'>
            <div className=' font-semibold rounded-3xl border border-gray-200 h-9 w-16 me-2 flex justify-center items-center'><button>Join</button></div>
            <div className={` ${ !isSubscribed ? ' bg-black text-white' : ''} font-semibold rounded-3xl  border h-9 w-24 p-2 me-2 flex justify-center items-center `} onClick={handleSubscribe}><button>Subscibe</button></div>
          </div>      
    </div>
    <div className='flex justify-evenly m-1 items-center w-[420px]'>
      <div className=' cursor-pointer  py-1 rounded-3xl flex w-2/6 me-1 items-center justify-evenly bg-gray-100 border'>
        <div onClick={handleToggle}>
          { isLiked ?
           <AiFillLike className=' text-teal-400 flex items-center h-6 me-1 w-6'/> :
            <BiLike className='flex items-center h-6 me-1 w-6'/>}
          </div>
        <div className="border-l-2 h-6 border-gray-400"></div>
        <div><BiDislike className='h-6 me-1 w-6'/></div>
      </div>
      <div className=' cursor-pointer  p-1 rounded-3xl flex justify-center items-center w-1/5 me-1  bg-gray-100 border'>
      <PiShareFat className=' h-6 w-6 mx-1'/>Share
      </div>
      <div className=' cursor-pointer  py-1 rounded-3xl flex justify-center items-center w-2/6 me-1  bg-gray-100 border'><a href="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg" className='flex' download="your-file-name.zip">
        <LiaDownloadSolid className='h-6 w-6'/>Download
      </a></div>

      <div className='rounded-full cursor-pointer flex justify-center text-center items-center h-8 w-8 me-1 bg-gray-100 border'>...</div>
    </div>
    <div className='w-full  my-3 border'>
    <h1 className='pl-3'> { !videoData[0] ? <ShimmerTitle/> : videoData[0]?.snippet?.localized?.title}</h1>

    <div className='' onClick={toggleAccordion}>
    {isOpen && ( 
    <div  className='ml-3'>
     {
       videoData[0] ? videoData[0]?.snippet?.localized?.description : <h1 className=' pl-5 bg-red-600'> Descriptions </h1> 
     }
     </div>)} 
     <button onClick={toggleAccordion} className='pl-1 font-medium mb-1'>
      {isOpen? 
      <h1> show less</h1> : <h1>more...</h1>
    }
    </button>
</div>
  </div>  
  </div>
  </div>
 
    </div>
    <div className='sm:w-10/12 md:w-10/12 lg:w-3/12 xl:w-3/12 w-10/12'><LiveChat/></div>
      </div>
     
  <div className='w-full flex flex-wrap'>
     <div className=' max-h-[600px] p-4 me-3 shadow-xl w-8/12'>
     <h1 className='' >Comments:</h1>
     <div className='comments max-h-[90%] overflow-y-scroll'><CommentsContainer/></div>  
      </div>
     <div className='m-2 p-2 w-3/12 max-h-[600px]  overflow-y-scroll'> <ChannelIdVideo info={channelId} height='20' padding='10'/> </div>
  </div>
   
    </div>
  )
}
export default WatchPage
export { id };