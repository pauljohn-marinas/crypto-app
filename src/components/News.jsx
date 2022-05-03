import React, { useState } from 'react'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const News = ({ simplified }) => {
  
  const [newsCategory,setNewsCategory] = useState("Crptocurrency");
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 18});
  const { data } = useGetCryptosQuery(100);
  const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  if(isFetching) return 'Loading ...';
  
  return (
    <Box mb={5} px={8}>
      {!simplified &&(
        <Box px={8} pt={5} mb={5} pl={0}>
          <FormControl sx={{ width: 300 }}>
            <InputLabel id="demo-simple-select-label">Cryptocurrency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue = ""
              onChange={(value) => setNewsCategory(value.target.value)}
            >
              {data?.data?.coins.map((coin, index) => <MenuItem key={index} value={coin.name}>{coin.name}</MenuItem> )}
            </Select>
          </FormControl>
        </Box>
      )}
        <Stack flexWrap="wrap" direction="row" justifyContent="flex-start">
          { cryptoNews.value.map((news, index) => (
            <Box mb={3} mr={3} key={index}>
              <Card sx={{ maxWidth: 320 }}>
                <CardContent>
                  <Stack direction="row">
                    <Typography gutterBottom variant="h6" component="div">
                      {news.name}
                    </Typography>
                    <CardMedia
                      component="img"
                      sx={{ maxWidth: 200, maxHeight: 100 }}
                      image={news?.image?.thumbnail?.contentUrl || demoImage }
                      alt="News Image"
                    />
                  </Stack>
                  <Typography variant="body2" color="text.secondary" mt={2}>
                    { news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: "16px" }}>
                  <Link href={news.url} target="_blank" rel="noreferrer" underline="hover" sx={{ fontSize: ".8em" }}>
                    Learn More
                  </Link>
                </CardActions>
              </Card>
            </Box>
            
          ))}
          
        </Stack>
    </Box>
  )
}

export default News