import React from 'react';

import TextField from '@mui/material/TextField'; 
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useMutation} from 'react-query';


const Login = () => {

  // const queryClient = useQueryClient()
  

  const defaultValues = {
    name: "",
    password: "", }


    const { handleSubmit,  control } = useForm({ defaultValues });



    const {data,error,mutate}= useMutation(async(data)=>{
      return await axios.post("http://localhost:8000/logingin" , data)
    }
    )  
console.log(data) 
console.log(error)


  const submit = async(data) =>{
    // try{
    //   const res = await axios.post("http://localhost:8000/logingin" , data)
    //   console.log(data)

    // }catch(error){
    // console.log(error)
    // }

    mutate(data)
   
    
  }

  return (<>
  
  <form onSubmit={handleSubmit(submit)}>

  <Controller
          render={({ field }) => <TextField {...field} />}
          name="name"
          control={control}  />

<Controller
          render={({ field }) => <TextField {...field} />}
          name="password"
          control={control}   />    

<button type='submit'>login</button>

  </form>
  
  
  
  
  
  </> )
}

export default Login
