import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import fetchBalance from '../Components/get_balance';
import BalanceDisplay from '../Components/BalanceDisplay';
import MoneyInput from '../Components/input';

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

  return (
    <ChakraProvider>
      <Flex direction="column" height="100vh" alignItems="center" justifyContent="center">
        <Box mb={8}>
          <BalanceDisplay balance={balance} />
        </Box>
        <Box>
          <MoneyInput updateBalance={handleUpdateBalance} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default FinancePage;
