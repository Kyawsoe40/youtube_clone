import {Stack} from '@mui/material';
import { categories } from '../utils/constants';

const SideBar = (props) => {
    
  return (
    <Stack direction="row" sx={{overflowY:'auto',height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
        {categories.map((c)=>(
            <button className='category-btn' 
            onClick={()=>{
                props.setSelectedCategory(c.name)
            }}
            style={{color:'white',background:c.name===props.selectedCategory && 'red' }}
            key={c.name}>
                <span style={{ color:c.name===props.selectedCategory ? 'white' : 'red',marginRight:'15px'}} >{c.icon}</span>
                <span style={{opacity:c.name===props.selectedCategory ? 1 : 0.8}} >{c.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar;