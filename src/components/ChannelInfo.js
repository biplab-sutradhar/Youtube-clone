import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { subscribeCar } from './utils/SubscribeSlice'; 
import { YOUR_API_KEY } from './utils/constants';

function ChannelInfo({ channelId }) {
  const [channelInfo, setChannelInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const subscribed = useSelector((state) => state.subscribe.cart);

  const handleSubscribe = () => {
    dispatch(subscribeCar({id: channelId}));
  };

  useEffect(() => {
    async function fetchChannelInfo() {
      try {
        setIsLoading(true);
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUR_API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch channel info');
        }
        const data = await response.json();
        setChannelInfo(data.items[0].snippet);
      } catch (error) {
        console.error('Error fetching channel info:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchChannelInfo();
  }, [channelId]);

  return (
    <div className=" w-56 h-50 rounded-md flex justify-center p-2 m-2 bg-gray-50">
      {isLoading ? (
        <div> </div>
      ) : (
        <>
          {channelInfo.thumbnails && (
            <div className='flex flex-col justify-center p-2'>
             <div className=' flex w-full justify-center'><img
                src={channelInfo.thumbnails?.default?.url || 'default-image-url'}
                alt="Channel Icon"
                className="size-12 rounded-full"
              />
              </div> 
              <h2 className="text-lg font-semibold">{channelInfo.title}</h2>
              {channelId && (
                <button className=' focus:bg-red-700 rounded-lg bg-myRed p-2' onClick={handleSubscribe}>Unsubscribe</button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ChannelInfo;
