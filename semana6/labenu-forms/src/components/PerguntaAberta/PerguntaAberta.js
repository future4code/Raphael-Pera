import React from 'react'
import styled from 'styled-components'

const PerguntaBox = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 0 30px 0;
`

const Verifica = styled.span`
    color: red;
    margin-left:15px;
`

const Pergunta = styled.label`
    margin: 0 0 5px 0;
    text-align: left;
`

const PerguntaInput = styled.input``



export class PerguntaAberta extends React.Component {   
    render() {
        return(
            <PerguntaBox>
                <Pergunta>
                    {this.props.pergunta}
                    {this.props.verifica && <Verifica>* preenchimento obrigatorio</Verifica>}
                </Pergunta>
                <PerguntaInput onChange={this.props.onChangeFunc} value={this.props.valor}/>
            </PerguntaBox>
        )
    }
}