import React from 'react'
import styled from 'styled-components'

const PerguntaBox = styled.div``

const Pergunta = styled.label``

const PerguntaInput = styled.input``



export class PerguntaAberta extends React.Component {
    render() {
        return(
            <div>
                {(this.props.perguntas && this.props.perguntas.length > 0) && this.props.perguntas.map((item) => {
                    return(
                        <PerguntaBox>
                            <Pergunta>{item}</Pergunta>
                            <PerguntaInput/>
                        </PerguntaBox>
                    )
                })}
            </div>
        )
    }
}