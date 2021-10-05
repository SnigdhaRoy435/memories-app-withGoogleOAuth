import React, { useState } from "react";
import { Avatar, Container, Paper, Grid, Button, Typography } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login'
import userStyle from './style';
import LockIcon from '@material-ui/icons/LockOutlined'
import Inputs from './Inputs'
import Icon from './icon';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialData = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = userStyle();
    const [showPassword, setShowPasword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialData);

    const history = useHistory();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData)
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    //this function is going to toggle the password from text to password
    const handleShowPassword = () => {

        setShowPasword((preShowPassword) => !preShowPassword)
    };

    const switchMode = () => {
        setIsSignUp((preSignUp) => !preSignUp)
        handleShowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/');

        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (err) => {
        console.log(err);
        console.log('Google sign up failed')
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignup && (
                                    <>
                                        <Inputs name="firstName" label="First Name" handleChange={handleChange} autofocus half />
                                        <Inputs name="lastName" label="Last Name" handleChange={handleChange} autofocus half />
                                    </>
                                )
                            }
                            <Inputs name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Inputs name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            {
                                isSignup && (
                                    <>
                                        <Inputs name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />
                                    </>
                                )
                            }
                        </Grid>
                        <Button type="submit" variant="contained" color="primary" className={classes.submit} fullWidth>
                            {
                                isSignup ? 'Sign Up' : 'Sign In'
                            }
                        </Button>
                        <GoogleLogin
                            clientId="183262673253-hebe6l81n0rlfcebs926a5d2odfu78ts.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button
                                    className={classes.googleButton}
                                    color="primary"
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Icon />}
                                    variant="contained"
                                >
                                    Google SignIn
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have account ? Sign In' : "Don't have account ? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    )
}

export default Auth;