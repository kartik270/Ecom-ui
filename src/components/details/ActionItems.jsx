import styled from "@emotion/styled";
import { Box ,Button, } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Action/cartAction";
import { useState } from "react";
const Leftcomponent = styled(Box)`
min-width:40%;
padding:40px 0px  0px 80px ;
`

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});
export const ActionItems = ({list})=>{

    const [quantity , setQuantity] = useState(1)
    const dispatch = useDispatch();
    const Navigate = useNavigate();
  const { id } = list
const additemtoCart = ()=>{
    dispatch(addToCart(id , quantity))
Navigate('/cart')
}

    return(

        <Leftcomponent style = {{}}>
            <Image src={list.url} alt="" />
            <StyledButton   onClick={additemtoCart} style={{marginRight: 10, background: '#ff9f00'}} variant="contained" >Add to Cart</StyledButton>
            <StyledButton  style={{background: '#fb641b'}} variant="contained">Buy Now</StyledButton>
        

            

        </Leftcomponent>
    )
}
export default ActionItems;