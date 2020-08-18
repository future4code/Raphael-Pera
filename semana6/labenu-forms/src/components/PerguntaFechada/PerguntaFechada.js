import React from 'react'
import styled from 'styled-components'

const PerguntaBox = styled.div`
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

const Selecao = styled.select``


export class PerguntaFechada extends React.Component {

    render() {
        return(
            <div>
                {this.props.opcoes &&
                    <PerguntaBox>
                        <Pergunta>
                            {this.props.pergunta}
                            {this.props.verifica && <Verifica>* preenchimento obrigatorio</Verifica>}
                        </Pergunta>
                        <Selecao onChange={this.props.onChangeFunc} >
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