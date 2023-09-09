import React from 'react'
import { AppBar, Toolbar ,styled,Box, Typography} from '@mui/material'
import Searchbar from './Searchbar';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';


export default function Header() {
    const Header = styled(AppBar)`
     background: #2874f0
     height:55
     `
     const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
     const Logobox = styled(Box)`
     margin-left:12%;
     line-hight:0;
    font-style:italic;
    text-decoration:  none;
    color:inherit;
    `
    const Subhead = styled(Typography)`
    font-size:12px
    `
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const Sublogo = styled("img")({
        width:10,
        height: 10,
        marginTop: 2,
        marginLeft:4
        
    })
  return (
    <div>
        <Header>
            <Toolbar style={{height:55}} >

                <Link to = '/'>
                <Logobox>

                    <img src={logoURL} alt="logo" style={{width:75}} />
                <Box style = {{display:'flex'}}>
                <Subhead>Explore&nbsp;<Box component="span" style={{color:"yellow"}}>Plus</Box> </Subhead>
                    <Sublogo src={subURL} alt="sublogo" />
                </Box>
                </Logobox>
            
                </Link>
                <Searchbar/>
                <CustomButton/>
                
            </Toolbar>
        </Header>
    </div>
  )
}
