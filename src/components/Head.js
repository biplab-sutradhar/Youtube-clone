import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { MdKeyboardVoice } from "react-icons/md";
import { toggleMenu } from './utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosNotifications } from 'react-icons/io';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { youtube_search_api } from './utils/constants';
import { CacheResults } from './utils/searchSlice';
import { Link } from 'react-router-dom';
import Authentication from './Authentication';
 import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Head = () => {
  const [searchQ, setSearch] = useState('');
  const [Check, setCheck] = useState(true)
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchCache = useSelector ((store) => store.search)
  // const searchInput = useRef(null);
  // const navigate = useNavigate();

 
  const { transcript, listening } = useSpeechRecognition();
 

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQ]){
        setSuggestions(searchCache[searchQ])
      } else {
        getSuggestions() }
    }, 200);
    

    return () => {
      clearTimeout(timer);
    };
  }, [searchQ]);

  const getSuggestions = async () => {
    try {
      const data = await fetch(youtube_search_api + searchQ);

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const searchData = await data.json();
      setSearchTerm(searchData[0]);  //  search term is the first element
      setSuggestions(searchData[1]); //  suggestions are in the second element
      dispatch(CacheResults({
        [searchQ] : searchData[1],
      })
      )
      if (Array.isArray(searchData[1])) {
        setShowSuggestions(true);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error.message);
    }
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // const handleSuggestionClick = (suggestion) => {
  //   console.log("Selected suggestion:", suggestion);
  //   setSearch(suggestion);
  // };

  // console.log(suggestions);

  const start = () => {
    SpeechRecognition.startListening(({ transcript }) => {
      setSearch(transcript);
    });
    setCheck(!Check); // Update microphone icon state
  };

  const stop = () => {
    SpeechRecognition.stopListening()
    setCheck(!Check)
  }

  // console.log(`searchQ : ${searchQ}
  // template : ${transcript}
  // `
  // );

  const searchClick = () => {
    console.log("suggestion");
  }
  return (
    
    <div className='grid grid-flow-col p-3 w-full items-center  shadow-md flex '>
      <div className='flex col-span-2'>
        <div className='flex items-center cursor-pointer me-1' onClick={toggleMenuHandler}>
          <FaBars />
        </div>
    <div>
    <Link to='/'>
        <div className='flex items-center ms-2 '>
          <h1 className='text-myRed text-2xl cursor-pointer me-1'>
            <FaYoutube />
          </h1>
          <h1 className='font-bold text-lg cursor-pointer'>YouTube </h1>
          <sup className=' text-xs'>IN</sup>
        </div>
        </Link>
        </div>

      </div>
      <div className='ps-2 col-span-9 relative '>
        <div className=' flex justify-between items-center lg:w-1/2 md:w-2/3 sm:w-2/3 rounded-xl'>
          <div className='w-11/12'>
            <input
              type='text'
              className='px-1 py-2 border h-11 rounded-s-full shadow-inner w-full'
              placeholder='  Search'
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              value={transcript ? transcript : searchQ}
            />
          </div>
    <div className=' w-2/12 mr-2 h-11 rounded-e-full bg-gray-200 text-2xl'>
      <a href={`/search?q=${transcript ? transcript : searchQ}`} className='flex justify-center items-center h-full w-full cursor-pointer '><button>
          <IoSearchOutline /> 
              </button></a>  
     </div> 
     <button className= {` ${ listening ? ' animate-pulse' : '' } bg-gray-200 rounded-full p-2 text-2xl hover:bg-gray-300`} onClick={ Check ? start : stop }> <MdKeyboardVoice className='active:scale-125'/> </button>
     {/* <p className=' absolute'>{transcript}</p> */}
     {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
        </div>
        <div
          className={`absolute min-w-[43%] m-1 py-2 px-4 h-auto shadow-2xl rounded-xl bg-white z-30 ${
            suggestions.length === 0 || !showSuggestions ? 'hidden' : ''
          }`}
        >
          {suggestions.length > 0 && showSuggestions && (
            <div className=''>
              {suggestions.map((suggestion,i) => (
                <div
                  key={suggestion}
                  className='left-0 right-0 py-1 flex items-center cursor-pointer w-full hover:bg-gray-200'
                  >
                  <div className='me-2'>
                  <IoSearchOutline />
                  </div>
                    <p key={crypto.randomUUID} onClick={searchClick}> {suggestion} </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


      <div className='col-span-1 text-2xl flex justify-center'>
        <h1 className='me-2 cursor-pointer'>
          <AiOutlineVideoCameraAdd />
        </h1>
        <h1 className='mx-2 flex relative cursor-pointer'>
          <IoIosNotifications />
          <div className='flex justify-center items-center text-sm text-white absolute bottom-4 left-3 bg-myRed rounded-full h-4 min-w-4 p-1'>4+</div>
        </h1>
        <div className='ml-2 cursor-pointer '>
          <Authentication/>
        </div>
      </div>
    </div>

  );
};

export default Head;