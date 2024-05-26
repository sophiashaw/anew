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
  Progress,
  Stack,
  Flex
} from '@chakra-ui/react'

const steps = [
  { title: 'M'},
  { title: 'T'},
  { title: 'W'},
  { title: 'Th'},
  {title: 'F'},
  { title: 'Sa'},
  { title: 'Su'}
]

function ProgressBar({Num_days}) {
  const { activeStep, setActiveStep } = useSteps({
    index: Num_days,
    count: steps.length,
  })

  const max = steps.length - 1
  const progressPercent = (activeStep / max) * 100

  return (
    <Box position='relative'>
        <Stepper size='sm' colorScheme='orange' index={activeStep} gap='0.12'>
        {steps.map((step, index) => (
        <Step key={index} onClick={() => setActiveStep(index)}>
        <Flex direction="column" align="center" zIndex={'100'}>
          <Box>
            <StepIndicator>
              <StepStatus
                incomplete={<StepNumber />}
                complete={<StepIcon />}
              />
            </StepIndicator>
          </Box>

          <Box flexShrink='7' mt = '2' textAlign={'center'} >
            <StepTitle>
              {step.title}
            </StepTitle>
          </Box>
        </Flex>
      </Step>
      ))}
      </Stepper >
      <Progress
        value={progressPercent}
        position='absolute'
        height='10px'
        width='full'
        top='10px'
        zIndex={0}
        textColor="black"
        colorScheme={'orange'}
      />
    </Box>
  )
}

export default ProgressBar;