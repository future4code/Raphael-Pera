import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin } from '../routes/Cordinator'
import { AppBarContainer, ButtonsContainer } from './styled'


export const MainAppBar = (props) => {
    const {buttonName, setButtonName} = props
    const history = useHistory()

    const logout = () => { localStorage.removeItem('token') }
    const logoutAction = () => {
        const token = localStorage.getItem('token')
        if(token){
            logout()
            setButtonName('Login')
        }
        goToLogin(history)
    }

    return(
        <AppBarContainer>
            <AppBar>
                <Toolbar>
                    <ButtonsContainer>
                        <Button onClick={()=>goToFeed(history)} >
                            <Typography variant={'h6'} > Labeddit </Typography> 
                        </Button>
                        <Button onClick={logoutAction} >
                            <Typography variant={'h6'} > {buttonName} </Typography> 
                        </Button>
                    </ButtonsContainer>

                </Toolbar>
            </AppBar>
        </AppBarContainer>
    )
}