import React from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const Inputfield = ({action,label,name,fullWidth,...rest}) => {
  const {control} = useFormContext()

return (<>

<section>
        <label>{label}</label>
        <Controller
          render={({ field:{onChange,...field} }) => <TextField fullWidth={fullWidth} label={label}
          onChange={(e)=>{
            console.log("by default action on change")
            action && action()
            onChange(e)
          }} {...field } {...rest} /> }
          name={name}
          control={control}
        />
      </section>



  
  </>
  )
}

export default Inputfield