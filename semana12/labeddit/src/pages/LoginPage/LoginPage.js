import React, { useState } from 'react'
import { Button, TextField} from '@material-ui/core'
import styled from 'styled-components'
import { LoginForm } from './LoginForm'
import { FormBox, PageBox, ButtonContainer} from './styled'
import 'fontsource-roboto'


export const LoginPage = () => {

    return(
        //Criar um CSS para posicionar e estilizar o formulário
        <div>
            <PageBox>
                <FormBox>
                    <h2>Login</h2>
                    <LoginForm></LoginForm>
                    <ButtonContainer>
                        <Button fullWidth> Não é cadastrado? Clique aqui </Button>
                    </ButtonContainer>
                </FormBox>
            </PageBox>
            
        </div>
    )
}