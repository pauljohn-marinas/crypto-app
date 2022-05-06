import React, { useState } from 'react';
import millify from 'millify';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';

import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  console.log(data);
  const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y' ];

  const stats =[
    {title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <MonetizationOnOutlinedIcon />},
    {title: 'Rank', value: cryptoDetails?.rank, icon: <TagOutlinedIcon />},
    {title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ElectricBoltIcon />},
    {title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <MonetizationOnOutlinedIcon />},
    // {title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <EmojiEventsOutlinedIcon />},
  ]
  
  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <InsertChartOutlinedIcon />},
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <CurrencyExchangeOutlinedIcon />},
    { title: 'Approved Supply', value: cryptoDetails?.approvedSupply, icon: <ErrorOutlineIcon />},
    // { title: 'Total Supply', value: `$ ${millify(cryptoDetails?.supply?.total)}`, icon: <ErrorOutlineIcon />},
    // { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails?.supply?.circulating)}`, icon: <ErrorOutlineIcon />},
  ]
 
  return (
    <Box mb={5} px={8} mt={5}>
      <Typography gutterBottom variant="h4" align='center' fontWeight={700} component="h1" color='#1565c0' mb={5}>{cryptoDetails?.name} ({cryptoDetails?.symbol}) Price</Typography>
      <Typography gutterBottom variant="body2" align='center' component="p">{cryptoDetails?.name} ({cryptoDetails?.symbol}){`${cryptoDetails?.name} live price in US dollars. View value statistics, market cap and supply.`}</Typography>
    </Box>
  )
}

export default CryptoDetails