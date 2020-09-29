import React from 'react'
import styled from 'styled-components'
import {Box, Button, Switch, Container, Typography, TextField, FormControl, AppBar, Toolbar} from '@material-ui/core'
import {ThumbUp, ThumbDown} from '@material-ui/icons'




export const AppContainer=()=>{
    return(
        <AppBar>
            <Toolbar>
                <Button>Botão</Button>
            </Toolbar>
        </AppBar>
    )
}