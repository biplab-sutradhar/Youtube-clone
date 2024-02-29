import React, { useEffect, useState } from 'react'
import { YOUR_API_KEY } from './utils/constants';

const Thumbnail = ({channelId}) => {
  const [channelThumbnail, setChannelThumbnail] = useState(null);

  useEffect(() => {
    const fetchChannelThumbnail = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUR_API_KEY}`
        );
        const data = await response.json();
        // console.log(data);
        const thumbnailUrl = data.items[0]?.snippet?.thumbnails?.default?.url;
        setChannelThumbnail(thumbnailUrl);
        // console.log(channelId);
      } catch (error) {
        console.error('Error fetching channel data:', error);
      }
    };

    fetchChannelThumbnail();
  }, [channelId]);

  return (
    <div>
      {channelThumbnail && (
        <img className='w-9 h-9 rounded-full' src={channelThumbnail} alt='channel-thumbnail' />
      )}
    </div>
  )
}

export default Thumbnail
