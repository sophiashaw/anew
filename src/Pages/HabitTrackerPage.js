
import React from 'react'
import { Button, Box, ButtonGroup, Stack, IconButton, Progress } from '@chakra-ui/react'
import { LuPlus } from "react-icons/lu";


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

// Create a new <style> element
var styleElement = document.createElement('style');

// Define the font-face rule
var fontFace = `
    @font-face {
        font-family: 'Playfair DisplayName';
        src: url('<link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">') format('truetype');
        /* Other font properties */
    }
`;

// Append font-face rule to the style element
styleElement.appendChild(document.createTextNode(fontFace));

// Append the style element to the <head> of the document
document.head.appendChild(styleElement);

// Apply the font to the body or specific elements
document.body.style.fontFamily = 'Playfair DisplayName';


const HabitTrackerPage = () => {
    return (
        <>
            <h1>Habits
            <Button RightIcon={<LuPlus />}colorScheme='pink' variant='outline' size='10px'></Button>
            </h1>
                
            <Accordion allowToggle defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                        Habit 1
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
                            
                        Habit 2
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
                            
                        Habit 3
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
                </>
            
        
    );
};

export default HabitTrackerPage;