import * as React from 'react';
import { Controller,useFormContext} from 'react-hook-form';
import { Box, FormControlLabel, MenuItem, Radio, RadioGroup } from '@mui/material';
import Inputfield from './Inputfield';
import CustomSelect from './CustomSelect';



export  const MultistepForm = ({activeStep:step})=> {
  const action = () => {
    console.log("special action")
  }
   
    const PersonalInfo = ()=> {
        const {control} = useFormContext()
      
        return <>
        <Box>
        <section>
        <label>Gender</label>
        <Controller
          render={({ field }) => (
            <RadioGroup aria-label="gender" {...field}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          )}
          name="gender"
          control={control}
        />
      </section>



      <Inputfield name="name" placeholder="Name" action={action} fullWidth label="Name" />

     <Inputfield name="lastname" placeholder="last name"  fullWidth label="Last Name" />
         
       <Inputfield  name="institute" placeholder="institute"  fullWidth  label="institute" />
         
       

        </Box>

        </>
    }


    const HomeAddress = ()=> {
        // const {control} = useFormContext()
        
        return <>
        <Box>
        
          <CustomSelect fullWidth label="Age" name="age" >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          </CustomSelect>

          <Inputfield placeholder="Home Address" name="homeaddress"  fullWidth label="Home Address"/>

          <Inputfield placeholder="Postal Address" name="postaladdress" fullWidth  label="Postal Address" />

          <Inputfield placeholder="Country" name="country"  fullWidth   label="Country" /> 
            

        </Box>

        </>
    }



    const ContactInfo = ()=> {
        // const {control} = useFormContext()
        return <>
        <Box>
       
        <Inputfield name="contactno" placeholder="Contact No."  fullWidth label="Contact No."  />
        
        <Inputfield name="emergencycontact" placeholder="Emergency Contact"  fullWidth label="Emergency Contact" /> 
        
         <Inputfield name="mail" placeholder="Mail"  fullWidth label="Mail"  />
        
        </Box>

        </>
    }













    switch (step) {
        case 0:
            return <PersonalInfo></PersonalInfo>

        case 1:
            return <HomeAddress></HomeAddress>    
        case 2:
            return <ContactInfo></ContactInfo>
        default:
            return <></>
    }
  }


