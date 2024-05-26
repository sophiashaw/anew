import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';

const BalanceDisplay = ({ balance }) => {
  return (
    <ChakraProvider>
      <Flex height="100" alignItems="center" justifyContent="center">
        <Box textAlign="center" color="#ed9cd3">
          <Stat>
            <StatLabel fontSize="25px">Total Balance:</StatLabel>
            <StatNumber fontSize="55px">${balance !== null ? balance.toFixed(2) : '0.00'}</StatNumber>
            <StatHelpText fontSize="10px">May 12 - May 28</StatHelpText>
          </Stat>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default BalanceDisplay;
