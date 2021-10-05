import React from 'react';
import { TextField, InputAdornment, Grid, IconButton } from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'


const Inputs = ({ name, half, handleChange, handleShowPasword, autoFocus, label, type }) => {
    return (
        <>
            <Grid item xs={12} sm={half ? 6 : 12}>
                <TextField
                    name={name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    label={label}
                    autoFocus={autoFocus}
                    type={type}
                    InputProps={name === 'password' ? {
                        endAdornment: (
                            <InputAdornment>
                                <IconButton onClick={handleShowPasword}>
                                    {type === 'password' ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    } : null}
                />
            </Grid>
        </>
    )
}

export default Inputs