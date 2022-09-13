import React from 'react'
import {Stack, Typography} from '@mui/material';
import {Link} from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
    <Stack direction="row" 
      alingitems="center" p={2} 
      sx={{position:'sticy',background:'#000',top:0,justifyContent:'space-between'}}>

    <Link to="/" style={{display:'flex',alingItems:'center'}}>
      <img src={logo} alt="logo" height="45" />
      <Typography color='white' marginLeft='20px' variant='h5' sx={{display:{xs:'none',md:'block'}}} >I-<span style={{color:'red'}} >Tube</span></Typography>
    </Link>
    <SearchBar />
    </Stack>
  )
}

export default Navbar