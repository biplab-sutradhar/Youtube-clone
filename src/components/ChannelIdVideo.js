import React, { useEffect, useState } from 'react';
import { YOUR_API_KEY } from "./utils/constants";
import { Link } from 'react-router-dom';
// import VideoById from './VideoById';
import Thumbnail from './Thumbnail';

const ChannelIdVideo = ({info,height,padding}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&channelId=${info}&key=${YOUR_API_KEY}`);
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=AU&key=${YOUR_API_KEY}`)
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log("Data", data);
  // console.log("Info",info);
  
  return (
    <div>
      {data ? 'Data loaded' : 'Loading...'}
      {data?.items?.map((video) => (
            <Link to={"/watch?v=" + video.id}>
            <div key={video.id} className={` cursor-pointer w-full mb-${padding} m-3 flex  p-3`}>
              <div className='h-32 flex justify-center lg:w-3/12 xl:w-3/12 md:w-5/12 w-6/12'><img className={` rounded-lg hover:rounded-none  h-${height} w-full`} src={video?.snippet?.thumbnails?.default?.url} alt={video.title} /></div>
              <div className='ms-3 lg:w-7/12 xl:w-8/12 md:w-6/12 sm:w-5/12 sm:-6/12 w-7/12'>
              <p className='m-1 '>{video?.snippet?.title}</p>
              <div className='flex'>
               <div className=' size-10'> <Thumbnail channelId={video?.snippet?.channelId}/></div>
                <h1 className='m-1 font-medium'>{video?.snippet?.channelTitle}</h1>
              </div> 
              <p className=' line-clamp-1'>{video?.snippet?.localized?.description}</p>
              </div>
            </div>
            </Link>
          ))}

    </div>
  );
};

export default ChannelIdVideo;
