import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import {Box, styled} from '@mui/material'
import { useEffect } from 'react'
import { getProducts } from '../../Redux/Action/Productaction'
import { useDispatch,useSelector } from 'react-redux'
// import {Slide} from './Slide'
import { Midslide } from './Midslide'
import { Midcomponent } from './Midcomponent'
import Slide from './Slide'

const Wraper = styled(Box)`
padding:10px;
background:#F2F2F2;
`
export default function Home() {

// const { products } = useSelector(state=> state.getProducts)
//  console.log(products)

//   const dispatch = useDispatch();
//   useEffect (()=>{
   
//     dispatch(getProducts());
//   },[dispatch])

 

  return (
    <div>
 <Nav/>
        <Wraper>
        <Banner/>
       
         <Slide />
         <Slide />
         <Slide />
         <Slide />
        <Midcomponent/>
         {/* <Slide  products = {products} />
        <Slide  products = {products}/>
        <Slide  products = {products} /> 
         <Slide  products = {products} titlte = "Session's top picks"/>  */}
    
        </Wraper>
    </div>
  )
}
