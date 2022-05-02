import React from 'react'
import './app.css'
import { Sidebar, Content, Footer } from "./components";
import Box from '@mui/material/Box';

const App = () => {
  return (
    <>
      <Box sx={{ 
        display: 'flex',
        width: '100%',
        height: '100vh',
      }}>
        <Sidebar/>
        <Box component='main' flex={4}  sx={{ paddingLeft: {xl: "320px", lg: "320px", md: "0", sm: "0", xs: "0"}}}>
          <Content/>
          <Footer/>
        </Box>
        
      </Box>
      
    </>
  )
}

export default App