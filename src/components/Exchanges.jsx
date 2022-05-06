import React from 'react';
import millify from 'millify';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useGetExchangesQuery } from '../services/cryptoApi';

const Exchanges = () => {
  const { data: cryptoExchanges, isFetching } = useGetExchangesQuery();
  console.log(cryptoExchanges?.data?.exchanges);

  if(isFetching) return "Loading ...";
  
  return (
    <Box mb={5} px={8} mt={5}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#1565c0", fontSize: "14px", fontWeight:"bold" }}>Rank</TableCell>
              <TableCell sx={{ color: "#1565c0", fontSize: "14px", fontWeight:"bold" }}>Exchanges</TableCell>
              <TableCell sx={{ color: "#1565c0", fontSize: "14px", fontWeight:"bold" }} align="center">Volume(24h)</TableCell>
              <TableCell sx={{ color: "#1565c0", fontSize: "14px", fontWeight:"bold" }} align="center">Markets</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              cryptoExchanges?.data?.exchanges?.map((list, index) => (
                <TableRow
                key={list.rank}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {list.rank}
                  </TableCell>
                  <TableCell align="center" sx={{ display: "flex", justifyContent:"flex-start", alignItems:"center" }}>
                    <Avatar sx={{ borderRadius:"0", marginRight: "20px" }} src={list.iconUrl} /> <Typography fontWeight={700}>{list.name}</Typography>
                  </TableCell>
                  <TableCell align="center">{millify(list["24hVolume"])}</TableCell>
                  <TableCell align="center">{list.numberOfMarkets}</TableCell>

                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Exchanges