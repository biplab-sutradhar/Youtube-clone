import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShimmerSearchVideo } from './others/Shimmer';
import VideoInfo from './others/videoInfo';
import { YOUR_API_KEY } from "./utils/constants";


const SearchVideo = () => {
  const [searchParams] = useSearchParams();
  const initialSearchText = searchParams.get("q");

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async (searchText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchText}&key=${YOUR_API_KEY}`);
      const data = await response.json();
      // console.log(data);
      if (data.items) {
        setSearchResults(data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.medium.url,
          time : item.snippet.publishTime,
        })));
      } else {
        setSearchResults([]); 
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    if (initialSearchText) {
      fetchVideos(initialSearchText);
    }
  }, []);


  function timeAgo(timestamp) {
    const date = new Date(timestamp);
    const currentDate = new Date();
    
    const seconds = Math.floor((currentDate - date) / 1000);
    
    if (seconds < 60) {
      return `${seconds} seconds ago`;
    }
    
    const minutes = Math.floor(seconds / 60);
    
    if (minutes < 60) {
      return `${minutes} minutes ago`;
    }
    
    const hours = Math.floor(minutes / 60);
    
    if (hours < 24) {
      return `${hours} hours ago`;
    }
    
    const days = Math.floor(hours / 24);
    
    if (days < 30) {
      return `${days} days ago`;
    }
    
    const months = Math.floor(days / 30);
    
    if (months < 12) {
      return `${months} months ago`;
    }
    
    const years = Math.floor(months / 12);
    
    return `${years} years ago`;
  }
  
  const timestamp = "2024-01-24T19:56:24Z";
  // console.log(timeAgo(timestamp)); 
  

  // console.log(data);

  return (
    <div className=' overflow-y-scroll h-screen'>
      {(isLoading && searchResults )? (
        <div className="m-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <ShimmerSearchVideo key={index} />
          ))}
        </div>
      ):(
        <ul>
          {searchResults.map((video) => (
             <Link to={"/watch?v=" + video.id}>
            <div key={crypto.randomUUID} className=' cursor-pointer shadow-sm h-56 m-3 flex p-3'>
              <div className=' flex justify-center lg:w-3/12 xl:w-3/12 md:w-5/12 w-6/12'><img className=' rounded-lg hover:rounded-none h-8/12 w-full' src={video.thumbnailUrl} alt={video.title} /></div>
              <div className='ms-3 flex flex-col justify-between lg:w-7/12 xl:w-8/12 md:w-6/12 sm:w-5/12 sm:-6/12 w-7/12'>
                <div className=' h-2/3'><h1 className='m-1 text-lg font-medium line-clamp-2'>{video.title}</h1>
              <p className=' line-clamp-2'>{video.description}</p>
              </div>

              <div className=' h-1/3' >
            <div> 
                < p className=' font-medium'> {Math.floor(Math.random() * (100 - 10 + 1)) + 10}k views : { timeAgo( video.time) } </p>
                {VideoInfo ? <VideoInfo videoId={video.id}/> : ''} </div>
              </div>
              </div>
            </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchVideo;
