import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import ChannelCard from './ChannelCard';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
const ChannelDetail = () => {
  const {id} =useParams();
  const [channelDetail,setChannelDetail]=useState([]);
  const [videos,setVideos] =useState([]);
  console.log(channelDetail,videos);
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  },[id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
            style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(9,38,121,1) 44%, rgba(22,143,210,1) 76%)',zIndex:10,height:'300px'}}
        />
        <ChannelCard channelDetail={channelDetail}
          marginTop="-93px"
        />
      </Box>
      <Box display='flex' p='2' >
        <Box sx={{mr:{sm:'50px'}}} />
          <Videos videos={videos} marginRight={{md:'40px',xs:'auto'}} />
      </Box>
    </Box>
  )
}

export default ChannelDetail