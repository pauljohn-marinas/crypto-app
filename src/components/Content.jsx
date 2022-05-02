import React from 'react'
import { Exchanges, Cryptocurrencies, News, Homepage, ErrorPage, CryptoDetails } from "./";
import { Routes, Route } from 'react-router-dom';

const Content = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
          <Route path="/news" element={<News />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
          <Route path="/exchanges" element={<Exchanges/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </>
  )
}

export default Content