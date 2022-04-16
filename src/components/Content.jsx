import React from 'react'
import Box from '@mui/material/Box';
import { Exchanges, Cryptocurrencies, News, Homepage, ErrorPage, CryptoDetails } from "./";
import { Routes, Route } from 'react-router-dom';

const Content = () => {
  return (
    <Box component='div' sx={{ 
        backgroundColor: 'pink',
     }}>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
          <Route path="/news" element={<News />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
          <Route path="/exchanges" element={<Exchanges/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </Box>
  )
}

export default Content