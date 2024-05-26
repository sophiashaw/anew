import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, IconButton } from '@chakra-ui/react';
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { LuCalendarCheck2 } from "react-icons/lu";

const NavComponent = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#9C3848"
      p="10px"
      boxShadow="md"
      zIndex={100}
    >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Pages/HabitTrackerPage">
            <IconButton
            colorScheme='#ef7a43ff'
            aria-label='Habit Tracker'
            size='lg'
            fontSize='40px'
            icon={<LuCalendarCheck2 />}
            />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Pages/FinancePage">
            <IconButton
            colorScheme='#ef7a43ff'
            aria-label='Finances'
            size='lg'
            fontSize='40px'
            icon={<AiOutlineDollar />}
            />
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export default NavComponent;
