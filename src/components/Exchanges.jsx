import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useGetExchangesQuery } from '../services/cryptoApi';

const Exchanges = () => {
  const { data: cryptoExchanges, isFetching } = useGetExchangesQuery();
  console.log(cryptoExchanges?.data?.exchanges);

  if(isFetching) return "Loading ...";
  
  return (
    <Box mb={5} px={8} mt={5}>
      {
        cryptoExchanges?.data?.exchanges?.map((list, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
              sx={{ backgroundColor:"#F7F7F7", borderBottom: "1px solid #848484" }}
            >
              <Typography>{`${list.rank}. ${list.name}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </Box>
  )
}

export default Exchanges