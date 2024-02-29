import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './components/utils/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchVideo from './components/searchVideo';
import LikeVideo from './components/LikedVideo';
import SubscribeVideo from './components/SubscribeVideo';
import HistoryVideo from './components/history/HistoryVideo';
import Other from './Other';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Head />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<MainContainer />} />
              <Route path="/search" element={<SearchVideo />} />
              <Route path="/watch" element={<WatchPage />} />
              <Route path="/likevideo" element={<LikeVideo />} />
              <Route path="/subscriptions" element={<SubscribeVideo />} />
              <Route path="/historyvideos" element={<HistoryVideo />} />
              <Route path="/others" element={<Other />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
