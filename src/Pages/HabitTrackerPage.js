
import React from 'react'
import { Button, Box, ButtonGroup, Stack, IconButton, Progress } from '@chakra-ui/react'
import { LuPlus } from "react-icons/lu";
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from '@chakra-ui/react'
import Calendar from '../Components/Calendar';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import HabitDetails from '../TrackerComponents/HabitDetails';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import ProgressBar from '../Components/ProgressBar';

    
const HabitTrackerPage = () => {
    return (
        <>
            <h1> Habits
            <Button RightIcon={<LuPlus />}colorScheme='pink' variant='outline' size='10px'></Button>
            </h1>
                
            <Accordion allowToggle> 
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                        <Editable defaultValue='Habit 1'>
                        <EditablePreview />
                        <EditableInput />
                        </Editable>  
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
        
                        <ProgressBar Num_days={6}>
                        </ProgressBar>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            <Editable defaultValue='Habit 2'>
                            <EditablePreview />
                            <EditableInput />
                            </Editable>  
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <ProgressBar Num_days={3}>
                        </ProgressBar>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            <Editable defaultValue='Habit 3'>
                            <EditablePreview />
                            <EditableInput />
                            </Editable> 
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <ProgressBar Num_days={1}>
                        </ProgressBar>
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
                <Calendar/>
                </>
            
        
    );
};

export default HabitTrackerPage;