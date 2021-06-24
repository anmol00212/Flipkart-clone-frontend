import React, { useState, useContext } from 'react';
import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';

import { LoginContext } from '../../context/ContextProvider';
import { useSelector } from 'react-redux';
import Profile from './Profile';
import LoginDialog from '../login/Login'

const useStyle = makeStyles({
 login: {
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    boxShadow: 'none'
 },

 wrapper:{
    margin: '0 5% 0 auto',
    display: 'flex',
    '& > *':{
        marginRight: 50,
        alignitems: 'center',
        textDecoration: 'none',
        color:'white'
    }
 },
 container: {
    display: 'flex',
}

})


const CustomButtons = () => {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
              {
                account ?  <Profile account={account} setAccount={setAccount} /> :
                <Link>
                    <Button className={classes.login} variant="contained" onClick={() => openDialog() }>Login</Button>
                </Link>
            }
            <Link><Typography style={{ marginTop: 5, fontWeight: 600 }}>More</Typography></Link>
            <Link to='/cart' className={classes.container} style={{marginTop: 5}}>
            <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCart />
            </Badge>
            <Typography style={{marginLeft: 10, fontWeight: 600}}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen}  setAccount={setAccount}/>
        </Box>
    )
}
 
export default CustomButtons;
  