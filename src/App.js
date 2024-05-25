import './App.css'
import React from 'react';
import { Box } from '@chakra-ui/react';
import { ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Finance from './Pages/FinancePage';
import HabitTrackerPage from './Pages/HabitTrackerPage';
import TopBar from './Components/top_bar';
import NavComponent from './Components/Nav';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div style={{ position: 'relative', minHeight: '100' }}>
          <NavComponent />
          <TopBar />
          <Box style={{ paddingTop: '60px' }}>
            <Routes>
              <Route path="/Pages/FinancePage" element={<Finance />} />
              <Route path="/Pages/HabitTrackerPage" element={<HabitTrackerPage />} />
            </Routes>
          </Box>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;