import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Flex, Textarea, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import fetchBalance from '../Components/get_balance';
import BalanceDisplay from '../Components/BalanceDisplay';
import MoneyInput from '../Components/input';
import NavComponent from '../Components/Nav';
import TopBar from '../Components/top_bar';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center
} from '@chakra-ui/react'

const FinancePage = () => {
  const [balance, setBalance] = useState(null);

  const getBalance = async () => {
    try {
      const balanceValue = await fetchBalance();
      setBalance(balanceValue);
    } catch (error) {
      console.error('There was an error fetching the balance!', error);
    }
  };

  const handleUpdateBalance = async () => {
    try {
      const newBalance = await fetchBalance();
      setBalance(newBalance);
    } catch (error) {
      console.error('There was an error updating the balance!', error);
    }
  };

  const pageStyle = {
    backgroundColor: '#F2EDE7', // Replace with your desired color
  };

  return (
    <div style={pageStyle}>
    <ChakraProvider>
      <TopBar />
      <NavComponent />
      <Center>
      <Flex direction="column">
        <Box alignContent={'center'} justifyContent='center' alignItems='center'>
          <BalanceDisplay balance={balance} />
        </Box>
        <Box>
          <MoneyInput updateBalance={handleUpdateBalance} />
        </Box>
        <Tabs borderColor='black' size='md' mt='-83px' ml='0px' mr='0px' variant='enclosed'>
        <TabList borderColor='black'>
          <Tab color='pink'>Financial Goals</Tab>
          <Tab>Notes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Textarea
            placeholder="What are your financial goals? Type them here!"
            mt=''
            size='md'
            bg='white'
            width='80%'
            minHeight="200px"
            borderRadius="lg"
            borderColor='pink'
            />
          </TabPanel>
          <TabPanel>
            <Textarea
            placeholder="Any Notes? Write them down here!"
            mt=''
            size='md'
            bg='white'
            width='80%'
            minHeight="200px"
            borderRadius="lg"
            borderColor='pink'
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
        
      </Flex>
      </Center>
    </ChakraProvider>
    </div>
  );
};

export default FinancePage;
