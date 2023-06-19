import React from 'react'
import useGif from '../Hooks/useGif'
import Spinner from './Spinner';

const Random = () => {
  const {gif, loading, error, fetchData} = useGif();
  return (
    <div className='bg-green-500 w-[55%] flex flex-col justify-between items-center rounded-lg py-3 h-[400px]'>
      <h2 className='w-[50%] mx-auto text-center bg-white rounded-md font-bold'>A Random Gif</h2>
      {
        loading ? <Spinner/> : 
        (error ? <div>{error}</div> : <img src={gif} alt='#' className='h-[300px] w-[80%] rounded-md shadow-lg'/> )
      }
      
      <button onClick={fetchData} className='w-[25%] bg-red-600 rounded-md text-white hover:text-yellow-200'>Generate</button>
      
    </div>
  )
}

export default Random