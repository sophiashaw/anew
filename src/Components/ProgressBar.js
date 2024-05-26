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
  const { completeStep, setCompleteStep } = useSteps({
    index: Num_days - 1,
    count: steps.length,
  })

  const max = steps.length - 1
  const progressPercent = (completeStep / max) * 100

  return (
    <Box position='relative'>
        <Stepper size='sm' colorScheme='pink' index={completeStep} gap='0.12'>
        {steps.map((step, index) => (
        <Step key={index} onClick={() => setCompleteStep(index)}>
        <Flex direction="column" align="center">
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
      </Stepper>
      <Progress
        value={progressPercent}
        position='absolute'
        height='10px'
        width='full'
        top='10px'
        zIndex={-1}
        color={"#EF7A43"}
      />
    </Box>
  )
}

export default ProgressBar;