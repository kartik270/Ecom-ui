import Carousel from "react-multi-carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Divider, Box, Typography, styled } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
};

const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`;

const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
`

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`

const Timer = styled(Box)`
    color: #7f7f7f;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
`;

const Image = styled('img')({
    width: 'auto',
    height: 150
})

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`

export const Slide = () => {
   
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        axios.get("http://localhost:8000/products")
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.error("API Error:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }
   console.log(list)

   const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Component>

            <Deal>

            <Typography>Deal of the Day</Typography>
                <Box>
        <img src={timerURL} alt="" />
                </Box>
                  <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>
            {loading ? (
                <p>Loading...</p>
            ) : (
                list && list.length > 0 ? (
                    <Carousel responsive={responsive}
                    infinite={true}
                    autoPlay = {true}
                    autoPlaySpeed={4000}
                    swipeable={false}
                    
                    >

                        {list.map(item => (

                            <Link to={`/product/${item.id}`}>
                            
                              <Box textAlign="center" style={{ padding: '25px 15px' }}>

                            <Image key={item.id} src={item.url} alt="products" />
                            <Text style={{ fontWeight: 600, color: '#212121' }}>{item.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{item.discount}</Text>
                                <Text style={{ color: '#212121', opacity: '.6' }}>{item.tagline}</Text>
                              </Box>
                              </Link>
                        ))}
                    </Carousel>
                ) : (
                    <p>No products available</p>
                   
                )
            )}
        </Component>
    )
}

export default Slide;
