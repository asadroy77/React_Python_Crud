import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  {useState } from "react";
import {FormProvider} from 'react-hook-form';
import {MultistepForm} from './MultistepForm';
import {useForm} from "react-hook-form";

const steps = ['Personal Information', 'Home Address', 'Contact Information'];

export default function Subscribe() {
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);

    // console.log((new Date( 2023,1,1,8) - new Date(2023,1,1,3))/(1000*60*60)) 

  const methods = useForm({
    defaultValues: {
        name:"",
        lastname:"",
        gender:"",
        institute:"",
        
        age:"",
        postaladdress:"",
        homeaddress:"",
        country:"",

        contactno:"",
        emergencycontact:"",
        mail:"",
    

    }
})




  const isStepOptional = (step) => {
    return  step === 1 ;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    
    if (activeStep === steps.length - 1) {
    
            console.log(data);
            setActiveStep(activeStep + 1);
          
      } else {
        setActiveStep(activeStep + 1);
        setSkippedSteps(
          skippedSteps.filter((skipItem) => skipItem !== activeStep)
        );
      }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
        setSkippedSteps([...skippedSteps, activeStep]);
      }
      setActiveStep(activeStep + 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Box sx={{ width: '60%',mx:"auto" ,my:3,border: "1px solid grey" ,padding:5,borderRadius:5}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
<FormProvider {...methods}>
    <form  onSubmit={methods.handleSubmit(handleNext)}>

     {<MultistepForm activeStep={activeStep}/>}

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
           Thank you , you have subscribed successfully
          </Typography>
         
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button type="submit"  >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}

</form>

</FormProvider>
    </Box>
  );
}