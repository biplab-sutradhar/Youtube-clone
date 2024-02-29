import React, { useState, useEffect } from 'react';
import Thumbnail from './Thumbnail';


const VideoCart = ({ info }) => {

  const formatDuration = (duration) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

    const [, hours, minutes, seconds] = match;

    const formattedHours = hours ? `${parseInt(hours, 10).toString().padStart(2, '0')}:` : '';
    const formattedMinutes = `${parseInt(minutes, 10).toString().padStart(2, '0')}:`;
    const formattedSeconds = parseInt(seconds, 10).toString().padStart(2, '0');

    return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
  };
  
  const formatViewCount = (viewCount) => {
    if (viewCount >= 1e9) {
      return `${(viewCount / 1e9).toFixed(1)}b`;
    } else if (viewCount >= 1e6) {
      return `${(viewCount / 1e6).toFixed(1)}m`;
    } else if (viewCount >= 1e3) {
      return `${(viewCount / 1e3).toFixed(1)}k`;
    } else {
      return viewCount.toString();
    }
  };

  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, title, channelId,  thumbnails, publishedAt} = snippet;
  // console.log(info);
  
  return (
    <div className='m-2 h-80 flex flex-col justify-evenly xl:w-80 md:w-80 lg:w-80 sm:w-96 w-96 shadow-sm relative'>
    <img className='w-full rounded-lg' src={thumbnails.medium.url} alt='thumbnails' />
    {contentDetails.duration && (
      <p className='absolute bottom-[45%] sm:bottom-[40%] right-2 bg-gray-100 bg-opacity-75 p-1 rounded-lg'>
        {formatDuration(contentDetails.duration)}
      </p>
    )}
    <div className=' grid grid-cols-10 justify-center'>
      <div className=' col-span-1 pt-3'>
        <Thumbnail channelId={channelId} />
      </div>
      <div className=' ms-2 col-span-8'>
        <ul>
          <li className='font-bold  overflow-x-hidden line-clamp-2'>{title}</li>
          <li>{channelTitle}</li>
          <li>{formatViewCount(statistics.viewCount)} Views . {new Date(publishedAt).toLocaleDateString()}</li>
        </ul>
      </div>
    </div>
  </div>
  );
};


export default VideoCart;
