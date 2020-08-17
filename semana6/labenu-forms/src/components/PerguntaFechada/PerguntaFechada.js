import React from 'react'
import styled from 'styled-components'

const PerguntaBox = styled.div``

const Pergunta = styled.label``

const Selecao = styled.select``


export class PerguntaFechada extends React.Component {

    render() {
        return(
            <div>
                {this.props.opcoes &&
                    <PerguntaBox>
                        <Pergunta>{this.props.pergunta}</Pergunta>
                        <Selecao>
                        {this.props.opcoes.map(
                            (item) => {return <option value={item}>{item}</option>})
                        }
                        </Selecao>
                    </PerguntaBox>
                }
            </div>
        )
    }
}