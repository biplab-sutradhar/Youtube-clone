import React, { useEffect, useState } from 'react'
import { YOUR_API_KEY } from '../utils/constants';
import Thumbnail from '../Thumbnail';

const VideoInfo = ({videoId}) => {
  const [Info, setInfo] = useState(null);

  useEffect(() => {
    const fetchChannelThumbnail = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUR_API_KEY}`
        );
        const data = await response.json();
        // console.log(data);
        // const thumbnailUrl = data.items[0]?.snippet?.thumbnails?.default?.url;
        setInfo(data.items);
        // console.log(channelId);

      } catch (error) {
        console.error('Error fetching channel data:', error);
      }
    };

    fetchChannelThumbnail();
  }, [videoId]);
  // console.log(Info);
  return (
     <div className='flex items-center'>
      {Info && Info.length > 0 && (
        <>
          <div className='size-10'>
            <Thumbnail channelId={Info[0]?.snippet?.channelId} />
          </div>
          <h1>{Info[0]?.snippet?.channelTitle}</h1>
        </>
      )}
    </div>
  )
}

export default VideoInfo
