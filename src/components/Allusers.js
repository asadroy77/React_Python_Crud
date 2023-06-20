import React from 'react';
import { useQuery } from 'react-query';
import axios from "axios";
 
 
 

const Allusers = () => {

 

    const { isLoading, error, data } = useQuery('allusers', async() =>{
        
            let res = await axios.get("http://localhost:8000/get")
            return res.data
            
        }
     )
   
     console.log(isLoading  + "loading")
     console.log(data)
     console.log(error + "error")

  return (<>
  {data && data.map((item,i)=>(
   <div key={i}> <h3>{item.name}</h3> </div>
  ))}
  </>
  )
}

export default Allusers