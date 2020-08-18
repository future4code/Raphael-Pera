import React from 'react'
import styled from 'styled-components'
import { Etapa1 } from '../Etapa1/Etapa1'
import { Etapa2 } from '../Etapa2/Etapa2'
import { Etapa3 } from '../Etapa3/Etapa3'

const FormPage = styled.main`
    max-width: 600px;
    min-width: 300px;
    margin: 0 auto;
    padding: 20px;
`

const FormSection = styled.section`
    max-width: 100%;
    border-radius: 8px;
    background-color: rgb(245,245,245);
    box-shadow: 0 2px 2px rgb(120,120,120);
    margin: 0 auto 20px auto;
    padding: 20px 30px;
    text-align: left;
`

const FormSecTitle = styled.h2`
    margin-bottom: 40px;
`


export class Formulario extends React.Component {

    state = {
        etapa1: true,
        etapa2: false,
        etapa3: false,
        etapaFinal: false,
    }

    verifica2 = () => {this.setState({etapa2: true})}
    verifica3 = () => {this.setState({etapa3: true})}
    verificaFinal = () => {this.setState({etapaFinal: true})}


    render() {
        console.log(`formulario: ${this.state.etapa2}`)
        return(
            <FormPage>
                
                {this.state.etapa1 &&
                    <FormSection>
                        <FormSecTitle>Dados Gerais</FormSecTitle>
                        <Etapa1 verificaEtapa2={() => this.verifica2(false)} verificaEtapa3={() => this.verifica3(false)}/>
                    </FormSection>
                }


                {this.state.etapa2 &&
                    <FormSection>
                        <FormSecTitle>Informações educacionais para quem está cursando (ou já terminou) o ensino superior</FormSecTitle>
                        <Etapa2 verificaEtapa={() => this.verificaFinal(false)}/>
                    </FormSection>
                }

                {this.state.etapa3 &&
                    <FormSection>
                        <FormSecTitle>Informações sobre quem não se formou no ensino superior nem está cursando</FormSecTitle>
                        <Etapa3 verificaEtapa={() => this.verificaFinal(false)}/>
                    </FormSection>
                }


                {this.state.etapaFinal &&
                    <FormSection>
                        <h4>Terminou! Obrigado pelas informações! :)</h4>
                    </FormSection>
                }
            </FormPage>
        )
    }
}