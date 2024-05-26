import React from 'react'
import { Button, Box, ButtonGroup, Stack, IconButton, Progress, Heading, Text } from '@chakra-ui/react'
import { LuPlus } from "react-icons/lu";
import NavComponent from '../Components/Nav';
import TopBar from '../Components/top_bar';


import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
   } from '@chakra-ui/react'
import Calendar from '../Components/Calendar';
//import Scheduler from '../Components/Scheduler';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import HabitDetails from '../TrackerComponents/HabitDetails';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import ProgressBar from '../Components/ProgressBar';

const pageStyle = {
    backgroundColor: '#F2EDE7', // Replace with your desired color
  };


    
const HabitTrackerPage = () => {
    return (
        <div style={pageStyle}>
            <TopBar />
            <NavComponent />
             <Box textAlign='center' mt={'5px'} mb={'5px'}>
            <Text fontSize={'26px'}>Weekly Milestones</Text>
            </Box>
                
            <Accordion allowToggle> 
                <AccordionItem borderColor={'#F2EDE7'}>
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
                    <AccordionPanel pb={4} bg="#FBCE9D">
        
                        <ProgressBar Num_days={6}>
                        </ProgressBar>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderColor={'#F2EDE7'}>
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
                    <AccordionPanel pb={4} bg="#FBCE9D">
                        <ProgressBar Num_days={3}>
                        </ProgressBar>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderColor={'#F2EDE7'}>
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
                    <AccordionPanel bg="#FBCE9D">
                        <ProgressBar Num_days={1}>
                        </ProgressBar>
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
            

        
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '503px'
        }}>
           <h1><Calendar/></h1>
        {/* </div>
            <Box bg={'#F2EDE7'} height={'512px'}>

        </Box>*/}
        </div>
        </div>
    );
};

export default HabitTrackerPage;