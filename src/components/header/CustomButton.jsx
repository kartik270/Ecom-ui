import {useState} from 'react'
import { Button, Typography,Box,styled , Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import  Loginbox from '../login/Loginbox'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function CustomButton() {
const [open , setopen] = useState(false)
const cartDetails = useSelector(state => state.cart);
const { cartItems } = cartDetails;
function Dialogbox()
{
  setopen(true)
}

const Navigate = useNavigate();




const Container = styled(Box)`
    display:flex;
    margin:0 3% 0 auto;
    & > button,& > p , & > div {
      margin-right:40px;
      
    }
    &>p,&>div{
      padding:4px;
    }
`
const Btn  = styled(Button)`
text-transform: none;
padding:5px 30px ;
color:blue;
background:white;

font-weight:600;



`

const Cart = styled(Box)(({ theme }) => ({
  display: 'flex',
  cursor:'pointer',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const routetoCart = ()=>{
  
  Navigate('/cart')
}

  return (
    <Container>

        <Btn variant="contained" onClick={()=>Dialogbox
          ()}>Login</Btn>
            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>
       
        <Cart  onClick={routetoCart} >

      
        <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>
          
          <Typography>Cart </Typography>
        </Cart>
        <Loginbox open = {open}  setopen = {setopen}/>
    </Container>
  )
}

