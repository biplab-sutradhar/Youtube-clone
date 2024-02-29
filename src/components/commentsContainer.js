import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { ShimmerOthers } from './others/Shimmer';
import { YOUR_API_KEY } from "./utils/constants";


 const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((commentThread) => {
        const commentData = commentThread.snippet.topLevelComment.snippet;
        return (
          <Comment data={commentData} key={commentThread.id} />
        );
      })}
    </div>
  );
};

const Comment = ({ data }) => {
  const { authorDisplayName, textDisplay, authorProfileImageUrl, likeCount, publishedAt } = data;
  return (
    <div className='my-8 flex '>
      <div className=' w-10 me-2'>
      <img src={authorProfileImageUrl} alt={`${authorDisplayName}'s profile` } className=' w-full rounded-full' />
      </div>
      <div className='w-11/12'>
        <h2>{authorDisplayName}</h2>
        <p>{textDisplay}</p>
        <div className='flex items-center'>
          <div className=' text-center flex flex-row text-xl me-4'>
            <BiLike className='mt-1'/> 
            <div className=' me-1'>{likeCount} </div>
            <BiDislike className='mt-1' />
             </div>
          <h1>{new Date(publishedAt).toLocaleDateString()} </h1>
         <h4 className='ms-4'>Reply </h4>
         </div>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    const getCommentData = async () => {
      try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=${YOUR_API_KEY}`)
         const data = await response.json();
        setCommentsData(data.items); 
      } catch (error) {
        console.error('Error fetching comments:', error.message);
      }
    };

    if (id) {
      getCommentData();
    }
  }, [id]); 

  return (
    <div >
      {!commentsData ? (<ShimmerOthers/>  )
       :(<CommentsList comments={commentsData} />)}
    </div>
  );
};

export default CommentsContainer;

//
