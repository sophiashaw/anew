import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box,
    Progress
  } from '@chakra-ui/react'

const steps = [
    { title: 'Mon'},
    { title: 'Tues'},
    { title: 'Wed'},
    { title: 'Thurs'},
    {title: 'Fri'},
    { title: 'Sat'},
    { title: 'Sun'}
  ]
  
  function ProgressBar({Num_days}) {
    const { activeStep, setActiveStep } = useSteps({
      index: Num_days,
      count: steps.length,
    })
  
    //const activeStepText = steps[activeStep].description
  
    const max = steps.length - 1
    const progressPercent = (activeStep / max) * 100
  
    return (
      <Box position='relative'>
        <Stepper size='sm' colorScheme='pink' index={activeStep} gap='0'>
        {steps.map((step, index) => (
        <Step key={index} onClick={() => setActiveStep(index)}>
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>

        <Box flexShrink='0'>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
        </Box>

        <StepSeparator />
      </Step>
      ))}
    </Stepper>
        <Progress
          value={progressPercent}
          position='absolute'
          height='3px'
          width='full'
          top='10px'
          zIndex={-1}
        />
      </Box>
    )
  }
  
export default ProgressBar;