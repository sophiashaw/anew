import './App.css'
import React from 'react';
import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react';
import { ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Finance from './Pages/FinancePage';
import HabitTrackerPage from './Pages/HabitTrackerPage';
import TopBar from './Components/top_bar';
import NavComponent from './Components/Nav';
import StartPage from './Pages/StartPage';



// to stop scroll

// const [rotate, setRotate] = useState<boolean>(false);
// console.log("rotate status: ", rotate)
// rotate?document.body.style.overflow = "hidden": document.body.style.overflow = "auto";

const MyComponent = () => {
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        console.log("rotate status: ", rotate);
        if (rotate) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Clean up on component unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [rotate]);

    return (
        <div>
            <button onClick={() => setRotate(!rotate)}>Toggle Rotate</button>
            {/* Your other component code here */}
        </div>
    );
};

// bgColor="#F2EDE7"

// actual app

function App() {
  return (
    
    <ChakraProvider>
      <Router>
        <div style={{ position: 'relative', minHeight: '100' }}>
          <Box>
            <Routes>
              <Route path="/FinancePage" element={<Finance />} />
              <Route path="/HabitTrackerPage" element={<HabitTrackerPage />} />
              <Route path="/" element={<StartPage />} />
            </Routes>
          </Box>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;