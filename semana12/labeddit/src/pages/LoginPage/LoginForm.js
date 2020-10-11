import React, { useState } from 'react'
import { Button, TextField} from '@material-ui/core'
import styled from 'styled-components'
import { Form, ButtonContainer } from './styled'
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'


export const LoginForm = (props) => {
    const history = useHistory()
    const [form, handleInputChange] = useForm({email:'', password:''})

    const onClickSubmit = event => {
        event.preventDefault()

        const inputPassword = document.getElementById('input-password')
        const passwordIsValid = inputPassword.checkValidity()
        inputPassword.reportValidity()

        const inputEmail = document.getElementById('input-email')
        const emailIsValid = inputEmail.checkValidity()
        inputEmail.reportValidity()

        if (passwordIsValid && emailIsValid) {
            login(form, history, props.setButtonName)
        }
    }

    return(
        <Form>
            <TextField
                label={'Email'}
                variant={'outlined'}
                type={'email'}
                name={'email'}
                onChange={handleInputChange}
                value={form.email}
                margin={'normal'}
                required
                autoFocus
                id={'input-email'}
                size="small"
            />

            <TextField
                label={'Senha'}
                variant={'outlined'}
                type={'password'}
                name={'password'}
                onChange={handleInputChange}
                value={form.password}
                margin={'normal'}
                required
                id={'input-password'}
                size="small"
            />

            <ButtonContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={onClickSubmit}
                    type={'submit'}
                    fullWidth
                >
                    Login
                </Button>
            </ButtonContainer>
        </Form>
    )
}


