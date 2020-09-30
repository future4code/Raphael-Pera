import React, { useState } from 'react'
import { Button, TextField} from '@material-ui/core'
import styled from 'styled-components'
import { LoginForm } from './LoginForm'
import { FormBox, PageBox, ButtonContainer} from './styled'
import 'fontsource-roboto'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Cordinator'
import { useUnprotectPage } from '../../hooks/useUnprotectPage'


export const LoginPage = (props) => {
    useUnprotectPage()
    const history = useHistory()

    return(
        <PageBox>
            <FormBox>
                <h2>Login</h2>
                <LoginForm setButtonName={props.setButtonName} />
                <ButtonContainer>
                    <Button
                        onClick={()=>{goToSignUp(history)}}
                        color={'primary'}
                        variant={'text'}
                        type={'submit'}
                        fullWidth
                    >
                        Não é cadastrado? Clique aqui
                    </Button>
                </ButtonContainer>
            </FormBox>
        </PageBox>
    )
}