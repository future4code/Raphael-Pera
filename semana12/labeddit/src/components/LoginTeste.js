import React from 'react'
import {Box, Button, Switch, Container, Typography, TextField, FormControl} from '@material-ui/core'


export function LoginTeste(){
    return(
        <Box>
            <Container maxWidth='sm' >
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', minHeight: '10vh' }} />
                <FormControl margin='normal' fullWidth >
                    <TextField label='Email' variant='outlined' size='small'></TextField>
                    <TextField label='Senha' variant='outlined' type='password' size='small' margin='normal'></TextField>
                    <Button variant={'contained'} color={'primary'} fullWidth='false' >Login</Button>
                    <Button variant={'contained'} color={'default'}>Cadastrar</Button>
                </FormControl>
            </Container>
        </Box>
    )
}