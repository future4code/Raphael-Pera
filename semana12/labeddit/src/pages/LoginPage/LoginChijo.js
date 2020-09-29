import React, { useState } from 'react'
import { Button, TextField} from '@material-ui/core'
import styled from 'styled-components'


export const LoginChijo = () => {
    const [form, setForm] = useState({email:'', password: ''})

    const handleInput = event => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
        // console.log(form)
    }

    const onClickSubmit = event => {
        // console.log(form)
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
        }

        if (emailIsValid && passwordIsValid) {
            console.log(form)
        }
    }

    return(
        //Criar um CSS para posicionar e estilizar o formulário
        <div>
            <form>
                <TextField
                    label={'Email'}
                    variant={'outlined'}
                    type={'email'}
                    name={'email'}
                    onChange={handleInput}
                    margin={'normal'}
                    required
                    autoFocus
                    id={'input-email'}
                />

                <TextField
                    label={'Senha'}
                    variant={'outlined'}
                    type={'password'}
                    name={'password'}
                    onChange={handleInput}
                    margin={'normal'}
                    required
                    id={'input-password'}
                />

                <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={onClickSubmit}
                    type={'submit'}
                >
                    Login
                </Button>

                <Button> Cadastrar </Button>
            </form>
        </div>
    )
}