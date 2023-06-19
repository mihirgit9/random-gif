import React, { useState } from 'react'
import useGif from '../Hooks/useGif';
import Spinner from './Spinner';

const Tag = () => {
  const [tag, setTag] =useState('');
  const {loading, gif, fetchData} = useGif();

  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className=' bg-orange-600 w-[55%] flex flex-col justify-between items-center rounded-lg py-3 h-[450px]'>
      <h2 className='w-[50%] mx-auto text-center bg-white rounded-md font-bold'>A Random {tag} Gif</h2>
      {loading ? <Spinner/> : <img src={gif} alt='#' className='h-[300px] w-[80%] rounded-md shadow-lg'/>}
      <div className='w-[100%] mx-auto flex flex-col items-center gap-3'>
        <input type='text'
          value={tag}
          onChange={changeHandler}
          placeholder='Enter Your Tag Here'
          className='w-[50%] rounded-md px-2'
        />
        <button onClick={()=> fetchData(tag)} className='w-[50%] bg-green-800 rounded-md text-white'>Generate</button>
      </div>
      
    </div>
  )
}

export default Tag