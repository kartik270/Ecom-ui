import axios from 'axios'

 export const authanticateSignup = async (data)=>{
    try{
    return  await  axios.post("http://localhost:5157/api/Employee",data)

    }catch(error)
    {
        console('error while up calling signUpapi ',error);
    }
}
