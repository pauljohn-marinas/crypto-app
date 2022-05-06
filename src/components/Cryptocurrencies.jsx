import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

import { useGetCryptosQuery } from '../services/cryptoApi';

const CardHeader = styled(Box)(({ theme }) =>({
  display: "flex",
  justifyContent: "space-between",
  alignItems:"center",
}));
const Cryptocurrencies = ({ simplified }) => {

  const [search, setSearch] = useState('');
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
    setCryptos(filteredData);
  }, [cryptosList, search])
  if(isFetching) return 'Loading ...';
  return (
    <>
      {!simplified &&(
        <Box px={8} pt={5} mb={5}>
          <TextField id="outlined-basic" label="Search Cryptocurrency" variant="outlined" onChange={e => setSearch(e.target.value)}/>
        </Box>
      )}
      <Box mb={5} px={8}>
        <Stack flexWrap="wrap" direction="row" justifyContent="flex-start">
          {cryptos?.map((currency, index) => (
            <Box sx={{ width: 320 }} mb={3} mr={3} key={index}>
              <Card variant="outlined">
                <CardHeader p={2}>
                  <Typography component="h6" fontWeight={700} sx={{ color:"#263238" }}>{`${currency.rank}. ${currency.name}`}</Typography>
                  <Avatar alt="Coin logo" src={currency.iconUrl} sx={{ position: "relative", zIndex: "1" }} />
                </CardHeader>
                <Divider/>
                <CardContent>
                  <Typography variant="body2" component="p" fontWeight={400} mb={2}>Price: {millify(currency.price)}</Typography>
                  <Typography variant="body2" component="p" fontWeight={400} mb={2}>Market Cap: {millify(currency.marketCap)}</Typography>
                  <Typography variant="body2" component="p" fontWeight={400}>Daily Change: {millify(currency.change)}</Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/crypto/${currency.uuid}`} style={{ textDecoration: "none" }}>
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
    
  )
}

export default Cryptocurrencies