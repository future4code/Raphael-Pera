import React, { useState } from 'react'
import { Button, TextField} from '@material-ui/core'
import styled from 'styled-components'
import { Form, ButtonContainer } from './styled'
import { useForm } from '../../hooks/useForm'
import { signUp } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { useUnprotectPage } from '../../hooks/useUnprotectPage'


export const SignUpForm = () => {
    useUnprotectPage()
    const history = useHistory()
    const [form, handleInputChange] = useForm({email:'', password:'', username:''})

    const onClickSubmit = event => {
        event.preventDefault()
        const inputPassword = document.getElementById('input-password')
        const passwordIsValid = inputPassword.checkValidity()
        inputPassword.reportValidity()

        const inputEmail = document.getElementById('input-email')
        const emailIsValid = inputEmail.checkValidity()
        inputEmail.reportValidity()

        const inputName = document.getElementById('input-name')
        const nameIsValid = inputName.checkValidity()
        inputName.reportValidity()

        if (passwordIsValid && emailIsValid && nameIsValid){
            signUp(form, history)
        }
    }

    return(
        <Form>
            <TextField
                label={'Nome'}
                variant={'outlined'}
                name={'username'}
                onChange={handleInputChange}
                value={form.name}
                margin={'normal'}
                required
                autoFocus
                id={'input-name'}
                size="small"
            />
            <TextField
                label={'Email'}
                variant={'outlined'}
                type={'email'}
                name={'email'}
                onChange={handleInputChange}
                value={form.email}
                margin={'normal'}
                required
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
                    Cadastrar
                </Button>
            </ButtonContainer>
        </Form>
    )
}


