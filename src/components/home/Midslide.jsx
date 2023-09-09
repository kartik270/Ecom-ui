import Slide from "./Slide"
import { Box ,styled} from "@mui/system"

const Component = styled(Box)`
display:flex;`

const Leftcomponent = styled(Box)`
width: 83% `



const Rightcomp = styled(Box)`
background:#fffff;
padding:5px;
margin-top:15px;
margin-left:10px;
width:17%;
text-align:center;
`

export const Midslide = ({products})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Component>
            <Leftcomponent>
            <Slide  />
            </Leftcomponent>
            <Rightcomp>
        <img src= {adURL} alt = '/advertisment' style = {{width : 217}}/>
            </Rightcomp>
        </Component>
    )
}