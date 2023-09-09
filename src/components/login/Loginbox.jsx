import { TextField, Typography, Box, Button,styled } from '@mui/material';
import { useState, } from 'react';
import Dialog from '@mui/material/Dialog';

import axios from "axios"
//css
const Container = styled(Box)`
height: 75vh;
width:550px;
`
const Image = styled(Box)`
background: blue;
height:100%;
width:50%;
paddiing:25px;

`
const Wrapper = styled(Box)`
 margin-top:15px;
padding-right:25px;
padding:10px;
margin-left:25px;
`
const Btn  = styled(Button)`
margin-top:10px;
background:#fB641B;
text-transform :none;
height:52px;
color:white;
border-radius:5px;
width:100%;
font-weight:400;
`
const Reotp = styled(Button)`
margin-top:10px;
background:#fff;
box-shadow: 1px  1px 1px;
text-transform :none;
height:52px;
color:blue;
border-radius:5px;
width:100%;
font-weight:400;
`
const Text = styled(Typography)`
color:blue;
margin-top:20px;
text-align:center;
font-weight:600;
cursor:pointer;
`
const Ortext = styled(Typography)`
text-align:center;
padding:8px;
margin-top:15px;
`

export default function Loginbox({ open, setopen }) {

const accountinitvalues = {
  login:{
    view:'login'
  },
  signup:{
    view:'signup'
  }
  
}

const obj  = {
  firstname:'',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: '',
}
  //states
  const [account , toogleaccount]=useState(accountinitvalues.login)
 const [signup,setsignup] = useState(obj);

 
// functions

function call()
{
  toogleaccount(accountinitvalues.signup)
  
}

  function handleClose() {
    setopen(false);
  }


   const oninput = (e)=>{
    setsignup({...signup , [e.target.name]: e.target.value})
    console.log(signup);
 
  }


  const signupUser = async()=>{
 
   await  axios.post("http://localhost:5157/api/Employee",signup)

    



  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Container style={{display:'flex'}} >

        <Image></Image>
        
        
        
{
  account.view=== 'login' ?

          
        <Wrapper>
           <TextField variant='standard' label='Enter Email/Mobile Number'></TextField>
          <TextField variant='standard' label='Enter Password'></TextField>
          <Typography  style={{marginTop:18}} >By continuing  you agree to flipkart's Terms of use Privacy and Policy</Typography>
         
          <Btn >Login</Btn>
          
          <Ortext varient='standard'>OR</Ortext>
          <Reotp>Request OTP</Reotp>
          <Text onClick={()=>call()}>New to Flipkart? create an account</Text> 
          
        </Wrapper>
:
       
            <Wrapper style={{margin:40,marginLeft:40,width:240,padding:20}}>
    <TextField variant='standard'  label='Enter Firstname' name='firstname' onChange={(e)=>oninput(e)}></TextField>
     <TextField variant='standard' label='Enter Lastname' name='lastname' onChange={(e)=>oninput(e)}></TextField>
   <TextField variant='standard' label='Enter Username'  name='username' onChange={(e)=>oninput(e)}></TextField>
        <TextField variant='standard' label='Enter Email'name='email' onChange={(e)=>oninput(e)}></TextField>
    <TextField variant='standard' label='Enter Password'   name='password' onChange={(e)=>oninput(e)}></TextField>
     <TextField variant='standard' label='Enter Phone' name='phone' onChange={(e)=>oninput(e)}></TextField>
          
            <Btn style={{marginTop:35,}}  onClick = {()=>signupUser()} >Continue</Btn>
        </Wrapper>
}
        </Container>

      </Dialog>

    </div>
  )
}
