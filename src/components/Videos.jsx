
import {Stack ,Box} from '@mui/material'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

const Videos = (props) => {
    if(!props.videos.length) return 'Loading.....';
  return (
    <Stack direction={props.direction || 'row'} flexWrap='wrap' justifyContent='stary' gap={2} >
        {
            props.videos.map((item,idx)=>(
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} marginRight={props.marginRight} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))
        }
    </Stack>
  )
}

export default Videos;