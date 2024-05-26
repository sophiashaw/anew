import React, { useState, useEffect } from 'react'
import { ChakraProvider, Center, AbsoluteCenter } from '@chakra-ui/react'
import fetchBalance from './get_balance';
import BalanceDisplay from '../Pages/FinancePage';
import { Button, Box, Stack, Badge } from '@chakra-ui/react'
import { BiMinusCircle } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";
import { Select } from '@chakra-ui/react';
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
                <Button leftIcon={<BiPlusCircle />} mt='-320px' size='md' bg="pink" variant="solid">
                  {/* <Badge borderRadius='full' fontSize='lg' px='3' colorScheme='pink'> */}
                    Income
                  {/* </Badge> */}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>How much did you earn?</PopoverHeader>
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
                  {/* <Select placeholder='Select option'>
                  <option value='option1'>Food</option>
                  <option value='option2'>Transportation</option>
                  <option value='option3'>Bills</option>
                  <option value='option3'>Other</option>
                  </Select> */}
                  <Button bg="#9c3848" textColor="white" onClick={handleIncomeSubmit}>Enter</Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* Subtract Expenses Button */}
            <Popover>
              <PopoverTrigger>
                <Button leftIcon={<BiMinusCircle />} mt='-170px' mb='150px' bg="pink" variant="solid">
                  {/* <Badge borderRadius='full' px='2' colorScheme='pink'> */}
                    Expense
                  {/* </Badge> */}
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
                  <Button mt={2} bg="#9c3848" textColor="white" onClick={handleExpenseSubmit}>Enter</Button>
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
