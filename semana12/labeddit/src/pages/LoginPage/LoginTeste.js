import React from 'react'
import {Box, Button, Switch, Container, Typography, TextField, FormControl, Grid} from '@material-ui/core'
import {spacing} from '@material-ui/system'
import styled from 'styled-components'

const MuiButton = styled(Button)(spacing)

export function LoginTeste(){
    return(
        <Box>
            {/* <Container maxWidth='sm' > */}
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', minHeight: '10vh' }} /> */}
                {/* <Typography> <h2>Login</h2> </Typography>
                <FormControl margin='normal' fullWidth >
                    <TextField label='Email' variant='outlined' size='small'></TextField>
                    <TextField label='Senha' variant='outlined' type='password' size='small' margin='normal'></TextField>
                    <MuiButton mt={1.5} variant={'contained'} color={'primary'} fullWidth='false' >Login</MuiButton>
                    <MuiButton mt={1.5} variant={'outlined'} color={'primary'}>Cadastrar</MuiButton>
                </FormControl>
            </Container> */}

            <Container maxWidth='sm' >
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', minHeight: '10vh' }} /> */}
                <Typography> <h2>Login</h2> </Typography>
                <FormControl margin='normal' fullWidth >
                    <TextField label='Email' variant='outlined' size='small'></TextField>
                    <TextField label='Senha' variant='outlined' type='password' size='small' margin='normal'></TextField>
                    <Button variant={'contained'} color={'primary'} fullWidth='false' >Login</Button>
                    <Button variant={'outlined'} color={'primary'}>Cadastrar</Button>

                    <Grid container>
                        <Grid item>
                            <TextField label='Email' variant='outlined' size='small'></TextField>
                        </Grid>
                        <Grid item>
                            <TextField label='Senha' variant='outlined' type='password' size='small'></TextField>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Button variant={'contained'} color={'primary'} fullWidth='false' >Login</Button>
                            </Grid>
                            <Grid item>
                                <Button variant={'outlined'} color={'primary'}>Cadastrar</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </FormControl>
            </Container>
        </Box>
    )
}