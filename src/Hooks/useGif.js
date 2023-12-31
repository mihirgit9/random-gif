import { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchData(tag){
    setError('');
    setLoading(true);
    try{
      const {data} =  await axios.get(tag ? `${url}&tag=${tag}`  : url);
      const imageSrc = data.data.images.downsized_large.url;
      setGif(imageSrc);
    }
    catch(err){
      setError(err.message);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    {gif, loading, error, fetchData}
  )
}

export default useGif