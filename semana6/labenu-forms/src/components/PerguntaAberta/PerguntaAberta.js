import React from 'react'
import styled from 'styled-components'

const PerguntaBox = styled.div``

const Pergunta = styled.label``

const PerguntaInput = styled.input``



export class PerguntaAberta extends React.Component {
    render() {
        return(
            <PerguntaBox>
                <Pergunta>{this.props.pergunta}</Pergunta>
                <PerguntaInput/>
            </PerguntaBox>
        )
    }
}