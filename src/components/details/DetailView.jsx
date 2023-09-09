import { Typography, Box , Grid, styled} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";


const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;



const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      margin: 0
  }
}))


export const DetailView = () => {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    getProductsByID();
  }, []);

  let { id } = useParams();
  const getProductsByID = async () => {
    await axios
      .get(`http://localhost:8000/products/${id}`)
      .then((response) => {
        setList(response.data);
        setLoading(false); // Data has been fetched, so set loading to false
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false); // Handle error and set loading to false
      });
  };

  return (
    <Component style={{ marginTop: 65 }}>
      {
      loading ? ( // Check if data is still loading
        <Typography>Loading...</Typography>
      ) : (
        <Container container >
          
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItems  list = {list}/>
            </Grid>
          
          <RightContainer>
            <Typography>{list.title.longTitle}</Typography>
            <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{list.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{list.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{list.price.discount} off</span>
                        </Typography>
          </RightContainer>
        </Container >
      )}
      <ProductDetail  list = {list}/>
    </Component>
  );
};

export default DetailView;
