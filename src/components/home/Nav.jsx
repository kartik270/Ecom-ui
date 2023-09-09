import React from 'react'
import { Box } from '@mui/system'
import { navData } from '../../constants/data'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
export default function Nav() {
    const Container = styled(Box)`
    display: flex;
    justify-content:center;
    text-align:center;
    `
    const Smallcontainer = styled(Box)`
    padding:28px ;
    `
    const Text = styled(Typography)`
    font-size:14px;
    font-family:inherit:
    font--weight:600px
    `
  return (
   <Container>
    {
      navData &&  navData.map(data=>(
            <Smallcontainer >
                <img src={data.url} alt="images" style={{height:60 ,marginTop:5}} />
                <Text style={{marginTop:4}}>{data.text}</Text>
            </Smallcontainer>
        ))

        }
    
   </Container>
  )
}
