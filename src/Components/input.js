import React, { useState, useEffect } from 'react'
import { ChakraProvider, Center, AbsoluteCenter } from '@chakra-ui/react'
import fetchBalance from './get_balance';
import BalanceDisplay from '../Pages/FinancePage';
import { Button, Box, Stack } from '@chakra-ui/react'
import { BiMinusCircle } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

//function App (){}
const MoneyInput = ({ updateBalance }) => {
  const [income, setIncome] = useState('0.00');
  const [expense, setExpense] = useState('0.00');

  const format = (val) => '$' + val;
  const parse = (val) => val.replace(/^\$/, '');

  const handleIncomeChange = (valueString) => {
    const parsedValue = parse(valueString);
    setIncome(parsedValue);
  };

  const handleExpenseChange = (valueString) => {
    const parsedValue = parse(valueString);
    setExpense(parsedValue);
  };

  const handleIncomeSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/add_money', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ balance: parse(income) }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Income updated: ", data);
      await updateBalance(data);
      console.log("Updated the balance!");
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  const handleExpenseSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/sub_money', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ balance: parse(expense) }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      console.log("Expense updated: ", data);
      await updateBalance(data);
      console.log("Updated the balance!");
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <ChakraProvider>
      <Box className="App" height={40} mt={30}>
        <div className="App">
          <Stack direction="row" spacing={4} align="center" justifyContent="center">
            {/* Add Income Button */}
            <Popover>
              <PopoverTrigger>
                <Button leftIcon={<BiPlusCircle />} colorScheme="pink" variant="outline">
                  Income
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Input your Income</PopoverHeader>
                <PopoverBody>
                  <NumberInput
                    onChange={(valueString) => handleIncomeChange(valueString)}
                    value={format(income)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button mt={2} colorScheme="pink" onClick={handleIncomeSubmit}>Enter</Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* Subtract Expenses Button */}
            <Popover>
              <PopoverTrigger>
                <Button leftIcon={<BiMinusCircle />} colorScheme="pink" variant="outline">
                  Expense
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>How much did you spend?</PopoverHeader>
                <PopoverBody>
                  <NumberInput
                    onChange={(valueString) => handleExpenseChange(valueString)}
                    value={format(expense)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button mt={2} colorScheme="pink" onClick={handleExpenseSubmit}>Enter</Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Stack>
        </div>
      </Box>
    </ChakraProvider>
  );
};

export default MoneyInput;
