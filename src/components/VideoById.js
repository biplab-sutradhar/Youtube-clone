import React, { useEffect, useState } from 'react';
import { YOUR_API_KEY } from './utils/constants';
import { Link } from 'react-router-dom';

const VideoById = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${YOUR_API_KEY}`);
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
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

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

  const formatDuration = (duration) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    const [, hours, minutes, seconds] = match;

    const formattedHours = hours ? `${parseInt(hours, 10).toString().padStart(2, '0')}:` : '';
    const formattedMinutes = `${parseInt(minutes, 10).toString().padStart(2, '0')}:`;
    const formattedSeconds = parseInt(seconds, 10).toString().padStart(2, '0');
    return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
  };

  return (
    <Link to={"/watch?v=" + id}>
      <div className='cursor-pointer shadow-sm h-56 m-3 flex p-3'>
        {data && ( // Check if data is available
          <>
            <div className='flex justify-center lg:w-3/12 xl:w-3/12 md:w-5/12 w-6/12 relative'>
  {data.items[0].snippet.thumbnails.medium.url && (
    <img
      className='rounded-lg hover:rounded-none h-8/12 w-full'
      src={data.items[0].snippet.thumbnails.medium.url}
      alt={data.items[0].snippet.title}
    />
  )}
  {data.items[0].contentDetails.duration && (
    <p className='absolute bottom-2 right-2 bg-gray-100 bg-opacity-75 p-1 rounded-lg'>
      {formatDuration(data.items[0].contentDetails.duration)}
    </p>
  )}
</div>

            <div className='ms-3 flex flex-col justify-between lg:w-7/12 xl:w-8/12 md:w-6/12 sm:w-5/12 sm:-6/12 w-7/12'>
              <div className='h-2/3'>
                {data.items[0].snippet.title && (
                  <h1 className='m-1 text-lg font-medium'>{data.items[0].snippet.title}</h1>
                )}
                {data.items[0].statistics.viewCount && (
                  <p>Views: { formatViewCount( data.items[0].statistics.viewCount)}</p>
                )}
                {data.items[0].statistics.likeCount && (
                  <p>Likes: {formatViewCount( data.items[0].statistics.likeCount)}</p>
                )}
                
              </div>
              <div className='h-1/3'>
                <div className='flex items-center'>
                  {data.items[0].snippet.channelTitle && (
                    <h1 className=' font-semibold'> {data.items[0].snippet.channelTitle}</h1>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
        {!data && <div>Loading...</div>} 
      </div>
    </Link>
  );


};

export default VideoById;
