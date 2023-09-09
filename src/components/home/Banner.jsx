import React from 'react'
import { bannerData } from '../../constants/data'
import {styled} from '@mui/material'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function  Banner() {
    const Image = styled('img')({

        width:'100%',
        height:280
    })

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
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
    
  return (
    <Carousel responsive={responsive}
    infinite={true}
    autoPlay = {true}
    autoPlaySpeed={4000}
    swipeable={false}
    draggable={false}
    containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"


    >
    {
        bannerData.map(data=>(
            <Image src={data.url} alt="banner" />
        ))
    }
    </Carousel>
  )
}
