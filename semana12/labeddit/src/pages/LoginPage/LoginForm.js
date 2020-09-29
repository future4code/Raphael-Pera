import React, { useState } from 'react'
import { Button, TextField} from '@material-ui/core'
import styled from 'styled-components'
import { Form, ButtonContainer } from './styled'


export const LoginForm = () => {
    const [form, setForm] = useState({email:'', password: ''})

    const handleInput = event => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const onClickSubmit = event => {
        event.preventDefault()
        const inputEmail = document.getElementById('input-email')
        const emailIsValid = inputEmail.checkValidity()
        inputEmail.reportValidity()

        let inputPassword
        let passwordIsValid

        if (emailIsValid) {
            inputPassword = document.getElementById('input-password')
            passwordIsValid = inputPassword.checkValidity()
            inputPassword.reportValidity()
            if (passwordIsValid){console.log('submit valido', form)}
        }
    }

    return(
        //Criar um CSS para posicionar e estilizar o formulário
        <div>
            <Form>
                <TextField
                    label={'Email'}
                    variant={'outlined'}
                    type={'email'}
                    name={'email'}
                    onChange={handleInput}
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
                    onChange={handleInput}
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
        </div>
    )
}