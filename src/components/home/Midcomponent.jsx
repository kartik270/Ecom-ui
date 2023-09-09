import { imageURL } from "../../constants/data"

import { Grid ,styled} from "@mui/material"

const Gridedit = styled(Grid)`
margin-top:20px`


export const Midcomponent = ()=>{
    return(
        <Gridedit lg={12} sm= {12} md = {12} xs = {12} container >

            {
                
            imageURL.map(image =>(
                <Grid item lg={4} sm= {12} md = {4} xs = {12}>
                <img src = {image} alt = "/images" style = {{width:"100%"}}/>
                </Grid>
            ))
            }
        </Gridedit>
      
    )
}