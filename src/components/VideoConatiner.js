import React, { useEffect, useState } from 'react';
import { youtube_api_key } from './utils/constants';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
import {ShimmerMainPage} from './others/Shimmer';

const VideoConatiner = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setIsLoading(false);
      getVideos();
    
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(youtube_api_key);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.error('Error fetching videos:', error.message);
    }
  };

  return (
    <div>
      {(isLoading && videos) ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {Array.from({ length: 10 }).map((_, index) => (
            <ShimmerMainPage key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-wrap gap-6 justify-center">
          {videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCart info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoConatiner;
