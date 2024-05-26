import React from 'react';
import { ChakraProvider, Box, Flex, Container } from '@chakra-ui/react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Center
} from '@chakra-ui/react';

const BalanceDisplay = ({ balance }) => {
  return (
    <ChakraProvider>
      <Center>
        <Flex width="100vw" height={'80'} alignItems="center" justifyContent="center" >
          <Box height={'40%'} w='64%' textAlign="center" color="#ed9cd3" maxW='sm' 
          borderWidth='2px' mb='160px' bg='white' borderColor='#EF7A43' borderRadius='lg'>
            <Stat>
              <StatLabel width={'100'} justifyContent={'center'} fontSize="20px" mt='10px' textColor={'#EF7A43'}>
                Total Balance
              </StatLabel>
              <StatNumber padding="0px" textColor={'#EF7A43'} fontSize="55px">${balance !== null ? balance.toFixed(2) : '0.00'}</StatNumber>
            </Stat>
          </Box>
        </Flex>
      </Center>
    </ChakraProvider>
  );
};

export default BalanceDisplay;
