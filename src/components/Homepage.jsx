import React from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Cryptocurrencies, News } from "./";

import { useGetCryptosQuery } from '../services/cryptoApi';

const StatsTitle = styled(Typography)(({theme}) =>({
  fontWeight: 400,
  color: "#9e9e9e",
}));
const StatsValue = styled(Typography)(({theme}) =>({
  fontWeight: 700,
  color: "#1565c0",
}));

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if(isFetching) return 'Loading...'; 

  return (
    <>
      <Box p={8}>
        <Typography variant="h4" component="h2" fontWeight={700} sx={{ color:"#263238" }} mb={5}>Global Crypto Stats</Typography>
        <Grid container rowSpacing={3} >
          <Grid item xl={6 }lg={6} md={6} sm={6} xs={6}>
            <StatsTitle variant="subtitle2" component="h6">Total Cryptocurrencies</StatsTitle>
            <StatsValue variant="h6" component="span">{globalStats.total}</StatsValue>
          </Grid>
          <Grid item xl={6 }lg={6} md={6} sm={6} xs={6}>
            <StatsTitle variant="subtitle2" component="h6">Total Exchanges</StatsTitle>
            <StatsValue variant="h6" component="span">{millify(globalStats.totalExchanges)}</StatsValue>
          </Grid>
          <Grid item xl={6 }lg={6} md={6} sm={6} xs={6}>
            <StatsTitle variant="subtitle2" component="h6">Total Market Cap</StatsTitle>
            <StatsValue variant="h6" component="span">{millify(globalStats.totalMarketCap)}</StatsValue>
          </Grid>
          <Grid item xl={6 }lg={6} md={6} sm={6} xs={6}>
            <StatsTitle variant="subtitle2" component="h6">Total 24h Volume</StatsTitle>
            <StatsValue variant="h6" component="span">{millify(globalStats.total24hVolume)}</StatsValue>
          </Grid>
          <Grid item xl={6 }lg={6} md={6} sm={6} xs={6}>
            <StatsTitle variant="subtitle2" component="h6">Total Markets</StatsTitle>
            <StatsValue variant="h6" component="span">{millify(globalStats.totalMarkets)}</StatsValue>
          </Grid>
          <Grid item xl={6 }lg={6} md={6} sm={6} xs={6}>
          </Grid>
        </Grid>
      </Box>
      <Box mb={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={5} px={8}>
          <Typography variant="h4" component="h2" fontWeight={700} sx={{ color:"#263238" }}>Top 10 Cryptocurrencies in the world</Typography>
          <Typography><Link to="/cryptocurrencies" style={{ textDecoration:"none", color:"##1565c0", fontWeight: 500, textTransform: "uppercase" }}>Show More</Link></Typography>
        </Stack>
        <Cryptocurrencies simplified/>
      </Box>
      <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={5} px={8}>
          <Typography variant="h4" component="h2" fontWeight={700} sx={{ color:"#263238" }}>Latest Crypto News</Typography>
          <Typography><Link to="/news" style={{ textDecoration:"none", color:"##1565c0", fontWeight: 500, textTransform: "uppercase" }}>Show More</Link></Typography>
        </Stack>
        <News simplified/>
      </Box>
    </>
    
  )
}

export default Homepage