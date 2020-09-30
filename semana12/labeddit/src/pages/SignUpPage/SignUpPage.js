import React from 'react'
import { SignUpForm } from './SignUpForm'
import { PageBox, FormBox } from './styled'

export const SignUpPage = () => {
    return(
        <PageBox>
            <FormBox>
                <h2>Cadastre-se</h2>
                <SignUpForm></SignUpForm>
            </FormBox>
        </PageBox>
    )
}