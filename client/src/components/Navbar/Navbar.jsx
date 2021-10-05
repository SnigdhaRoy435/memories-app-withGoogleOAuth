import React, { useEffect, useState } from 'react';
import { Typography, AppBar, Toolbar, Avatar, Button } from '@material-ui/core';
import userImage from '../../images/user.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'


import userStyle from './style'

const Navbar = () => {
    const classes = userStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    // this type of useState is used when we are immediately 
    //going to fetch the data or profile from local storage 

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user);

    useEffect(() => {
        const token = user?.token;

        //JWT authentication manually

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    }

    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography component={Link} to='/' className={classes.heading} variant="h4" align="center">Memories</Typography>
                    <img className={classes.image} src={userImage} alt="memories" height="60" />
                </div>
                <Toolbar className={classes.toolbar}>
                    {
                        user ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                                <Button className={classes.logout} variant="contained" color="secondary" onClick={logout}>Logout</Button>
                            </div>
                        ) : (
                            <Button component={Link} to="/auth" variant="contained" color="primary">SignIn</Button>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;