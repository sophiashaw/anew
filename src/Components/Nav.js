import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="pink"
      p="10px"
      boxShadow="md"
      zIndex={100}
    >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Pages/HabitTrackerPage">
            Tracker
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/Pages/FinancePage">
            Finances
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export default NavComponent;
