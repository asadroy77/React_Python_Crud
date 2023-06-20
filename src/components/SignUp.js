import React from 'react';
import TextField from '@mui/material/TextField'; 
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import {  useMutation, useQueryClient } from 'react-query'



const SignUp = () => {
 
  const queryClient = useQueryClient()
 

  const defaultValues = {
    name:"",
    password:""}


    const { handleSubmit,  control } = useForm({ defaultValues });


  let mutation= useMutation(async(data)=>{
    return await axios.post("http://localhost:8000/signingup" , data)
  },
  {onSuccess:()=>{
    queryClient.invalidateQueries('allusers')
  
   } }
  )  



  const submit = (data) =>{
    // try {
    //   const res = await axios.post("http://localhost:8000/signingup" , data)
    //   console.log(res)
    // } catch (error) {
    //   console.log(error)
      
    // }

   mutation.mutate(data)

    
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

<button type='submit'>SignUp</button>

  </form>
  
  
  
  
  
  </> )
}

export default SignUp