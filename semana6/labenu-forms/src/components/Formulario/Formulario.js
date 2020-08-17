import React from 'react'
import styled from 'styled-components'
import { Etapa1 } from '../Etapa1/Etapa1'
import { Etapa2 } from '../Etapa2/Etapa2'
import { Etapa3 } from '../Etapa3/Etapa3'

const FormPage = styled.main`
    max-width: 600px;
    min-width: 300px;
    margin: 0 auto;
    padding: 20px 0 0 0;
`

const FormSection = styled.section`
    border-radius: 8px;
    background-color: rgb(240,240,240);
    box-shadow: 0 2px 2px rgb(120,120,120);
    margin: 0 auto 20px auto;
    padding: 5px;
`

const FormSecTitle = styled.h2``


export class Formulario extends React.Component {
    render() {
        return(
            <FormPage>
                <FormSection>
                    <FormSecTitle>Dados Gerais</FormSecTitle>
                    <Etapa1/>
                </FormSection>

                <FormSection>
                    <FormSecTitle>Informações educacionais para quem está cursando (ou já terminou) o ensino superior</FormSecTitle>
                    <Etapa2/>
                </FormSection>

                <FormSection>
                    <FormSecTitle>Informações sobre quem não se formou no ensino superior nem está cursando</FormSecTitle>
                    <Etapa3/>
                </FormSection>

                <FormSection>
                    <h4>Terminou! Obrigado pelas informações! :)</h4>
                </FormSection>
            </FormPage>
        )
    }
}