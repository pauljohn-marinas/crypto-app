import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ArticleIcon from '@mui/icons-material/Article';

const Sidebar = () => {
  return (
    <Box component='nav' flex={1} bgcolor="primary.dark">
         <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ p:3 }}>
             <img src={logo} alt="Cryptoverse Logo" style={{ width: '70px' }} />
            <Typography sx={{ 
                ml: 3,
                fontWeight: 'bold',
                color: '#fff'
             }} variant="h4" component="h4">Cryptoverse</Typography>
         </Stack>
        <Divider sx={{marginBottom:2}} />
        <List>
            <Link to="/" style={{ color:'#fff', textDecoration:'none' }}>
                <ListItem disablePadding>
                    <ListItemButton sx={{ px:5 }}>
                    <ListItemIcon>
                        <HomeIcon style={{ color: "#fff"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
            </Link>
          <Link to="/cryptocurrencies" style={{ color:'#fff', textDecoration:'none' }}>
            <ListItem disablePadding>
                <ListItemButton sx={{ px:5 }}>
                <ListItemIcon>
                    <CurrencyBitcoinIcon style={{ color: "#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="Cryptocurrencies" />
                </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/exchanges" style={{ color:'#fff', textDecoration:'none' }}>
            <ListItem disablePadding>
                <ListItemButton sx={{ px:5 }}>
                <ListItemIcon>
                    <CurrencyExchangeIcon style={{ color: "#fff"}}/>
                </ListItemIcon>
                <ListItemText primary="Exchanges" />
                </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/news" style={{ color:'#fff', textDecoration:'none' }}>
            <ListItem disablePadding>
                <ListItemButton sx={{ px:5 }}>
                <ListItemIcon>
                    <ArticleIcon style={{ color: "#fff" }}/>
                </ListItemIcon>
                <ListItemText primary="News" />
                </ListItemButton>
            </ListItem>
          </Link>
        </List>
    </Box>
  )
}

export default Sidebar