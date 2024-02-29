import React from 'react'



export const ShimmerMainPage = () => {
  return (
    <div className= ' flex flex-col justify-center items-center  h-60 m-2 xl:w-80 md:w-80 lg:w-80 sm:w-96 w-96'>
      <div className=' h-3/5 w-5/6 rounded-lg bg-gray-200'></div>
      <div className=' flex justify-evenly items-center h-2/5 w-5/6 '>
        <div className='bg-gray-200 h-10 w-10 rounded-full '></div>
        <div className='m-2 w-3/4'>
          <div className='bg-gray-200 h-4 w-full my-2'></div>
          <div className='bg-gray-200 h-4 w-full '></div>
        </div>
        </div>
      
    </div>
  )
};

 
export const ShimmerSearchVideo = () => {
  return (
    <div className=' p-2 flex items-center justify-center w-full'>
    
    <div className='rounded-lg bg-gray-100 size-52 m-2'></div>
    <div className='w-5/6 h-4/6 flex justify-between items-center p-4 flex-col h-full'>
      <div className=' w-5/6 '>
        <div className='m-2 mb-5 w-full h-4 bg-gray-100'></div>
        <div className='m-2 w-full h-4 bg-gray-100'> </div>
      </div>
      <div className=' w-full justify-center flex items-center'>
        <div className=' rounded-full bg-gray-100 size-12'> </div>
        <div className='m-1 w-5/6 h-4 bg-gray-100 '></div>
      </div>
    </div>
    </div>
  )
}

export const ShimmerOthers = () => {
  return (
    <div className=' flex items-center flex-col justify-center w-11/12 '>
      <div className=' m-1 h-3 w-full bg-gray-200'></div>
      <div className=' m-1 h-3 w-full bg-gray-200'></div>
      <div className=' m-1 h-3 w-full bg-gray-200'></div>
      <div className=' m-1 h-3 w-full bg-gray-200'></div>

    </div>
  )
}

export const ShimmerTitle = () => {
  return (
    <div className=' flex items-center flex-col justify-center w-11/12 '>
      <div className=' m-1 h-3 w-full bg-gray-200'></div>
      <div className=' m-1 h-3 w-full bg-gray-200'></div>
     

    </div>
  )
}