import { useSelector } from 'react-redux';
import VideoById from './VideoById';

function LikeVideo() {
  // Use the useSelector hook to select the cart data from the Redux store
  const cart = useSelector((state) => state.video.cart);
  console.log(cart);
  return (
    <div className='overflow-y-scroll relative h-screen'>
      <ul>
        {cart.map((id) => (
          <li key={id}>  <VideoById id={id}  /> </li>
        ))}
      </ul>
    </div>
  );
}

export default LikeVideo;
