import { useSelector } from 'react-redux';
import VideoById from './VideoById';
import ChannelIdVideo from './ChannelIdVideo';
import ChannelInfo from './ChannelInfo';

function LikeVideo() {
  const subscribed = useSelector((state) => state.subscribe.cart);

  return (
    <div className=' overflow-y-scroll relative h-screen'>
      <ul>
        {subscribed.length > 0 ? (
          subscribed.map((id) => (
            <li key={id}>  
              <ChannelInfo channelId={id} /> 
            </li>
          ))
        ) : (
          <li>No subscribed channels</li>
        )}
      </ul>
    </div>
  );
}

export default LikeVideo;
