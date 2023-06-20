import { FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';
import { forwardRef } from 'react';
import {Controller, useFormContext} from "react-hook-form";



const CustomSelect = forwardRef(({children,name,fullWidth,label,...rest},ref) => {
  const {control} = useFormContext()
        
    // function customechnage(onChange){
    //    console.log("Onchange of select")
    //    return onChange
    // }
    
  return (<>

<section>
        <label>{label}</label>
        <Controller
          render={({ field: { onChange, ...field } }) => (
            <FormControl fullWidth={fullWidth}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select  labelId="demo-simple-select-label"
            label={label}
            id="demo-simple-select"  {...field}  {...rest}  onChange={(e) => {
              
              console.log('CustomSelect onChange');
             
              onChange(e);
            }}> 
           
          {children}
        </Select>
          </FormControl> )}
          name={name}
          control={control} />
</section>



  </>
  )
})

export default CustomSelect;