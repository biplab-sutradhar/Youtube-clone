import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from './utils/ChatSlice';
import { nameGenerate, stringGenerate } from './utils/helper';
import { LuSendHorizonal } from "react-icons/lu";
import { id } from './WatchPage';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("")
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Api polling
      // console.log("Api Polling");
      dispatch(addMessages({
        name: nameGenerate(),
        message: stringGenerate(),
      }));
    }, 20000000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className='m-2 w-full p-1 border  rounded-xl'>
      <div className=' ps-4 w-full shadow-sm'>Livechat</div>
      <div className='h-[35vh]  md:h-[50vh] sm:h-[35vh] lg:h-[60vh] xl:h-[70vh] overflow-auto flex flex-col-reverse'>
        { ChatMessages.map((c, index) => (
          <ChatMessage
            name={c.name}
            message={c.message}
            key={index}
          />
        ))}
      </div>
      <hr />
      <form
    className='p-1 my-2 w-full justify-evenly rounded-xl flex'
    onSubmit={(e) => {
      e.preventDefault();
      dispatch(addMessages({
        name: "Biplab",
        message: liveMessage
      }));
      setLiveMessage('')
    }}
  >
    <input
      className='w-4/6 py-1 px-2 rounded-full me-2 bg-gray-100'
      type="text"
      value={liveMessage}
      onChange={(e) => setLiveMessage(e.target.value)}
      placeholder='chat...'
    />
    <button className=' text-xl'><LuSendHorizonal/></button>
</form>
    </div>
  );
};

export default LiveChat;
