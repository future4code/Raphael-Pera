import React from 'react'
import styled from 'styled-components'
import {Box, Button, Switch, Container, Typography, TextField} from '@material-ui/core'
import {ThumbUp, ThumbDown} from '@material-ui/icons'


const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 50%;
    /* justify-content: space-evenly; */
`

export const AppContainer=()=>{
    return(
        <Box>
            {/* <Button variant={'contained'} color={'primary'} >Teste</Button>
            <Switch></Switch>
            <Switch color="primary" />
            <ThumbUp></ThumbUp>
            <ThumbDown></ThumbDown> */}
            <Container maxWidth='false' >
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', minHeight: '50vh' }} /> */}
                <Form /*style={{backgroundColor: 'lightgreen'}}*/ >
                    <TextField label='Email' variant='outlined' size='small'></TextField>
                    <TextField label='Senha' variant='outlined' type='password' size='small' margin='normal'></TextField>
                    <Button variant={'contained'} color={'primary'}>Login</Button>
                </Form>
            </Container>
        </Box>
    )
}