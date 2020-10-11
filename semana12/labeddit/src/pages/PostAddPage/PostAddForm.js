import React, { useState } from 'react'
import { Button, TextField} from '@material-ui/core'
import styled from 'styled-components'
import { Form, ButtonContainer } from './styled'
import { useForm } from '../../hooks/useForm'
import { comment, login } from '../../services/user'
import { useHistory } from 'react-router-dom'


export const PostAddForm = (props) => {
    const history = useHistory()
    const [form, handleInputChange] = useForm({text:'', title:''})

    const onClickSubmit = event => {
        console.log('onClickSubmit')
        event.preventDefault()

        const inputText = document.getElementById('input-text')
        const textIsValid = inputText.checkValidity()
        inputText.reportValidity()

        const inputTitle = document.getElementById('input-title')
        const titleIsValid = inputTitle.checkValidity()
        inputTitle.reportValidity()

        if (textIsValid && titleIsValid) {
            // login(form, history, props.setButtonName)
            comment(form)
        } else {
            console.log('submit erro', textIsValid, titleIsValid)
        }
    }

    const onClickTeste = (event) => {
        event.preventDefault()
        console.log('clicou')
    }

    return(
        <Form>
            <TextField
                label={'Título'}
                variant={'outlined'}
                name={'title'}
                onChange={handleInputChange}
                value={form.title}
                margin={'normal'}
                required
                autoFocus
                multiline
                id={'input-title'}
                size="large"
                type='text'
            />

            <TextField
                label={'Comentário'}
                variant={'outlined'}
                name={'text'}
                onChange={handleInputChange}
                value={form.text}
                margin={'normal'}
                required
                multiline
                id={'input-text'}
                size="large"
                type='text'
            />

            <ButtonContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={onClickSubmit}
                    // type={'submit'}
                    fullWidth
                >
                    Comentar
                </Button>
            </ButtonContainer>
        </Form>
    )
}