import { useSelector } from 'react-redux';
import VideoById from '../VideoById';

function HistoryVideo() {
  const cart = useSelector((state) => state.history.cart);

  return (
    <div>
      <ul>
        {cart.map((id) => (
          <li key={id}><VideoById  id={id} /></li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryVideo;