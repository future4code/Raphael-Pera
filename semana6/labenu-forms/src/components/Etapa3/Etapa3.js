import React from 'react'
import styled from 'styled-components'
import { PerguntaAberta } from '../PerguntaAberta/PerguntaAberta'
import { PerguntaFechada } from '../PerguntaFechada/PerguntaFechada'


const EtapaBox = styled.div`
    display: flex;
    flex-direction: column;
`

const ContinuarBtn = styled.button`
    width: 100px;
    padding: 3px 0;
`


export class Etapa3 extends React.Component {
    state = {
        completo: false,
        inputCursoValue:'',
        inputUnidadeValue:'',

        verificaCurso: false,
        verificaSelect: false,
    }

    onChangeCurso = (event) => {this.setState({inputCursoValue: event.target.value})}
    onChangeSelect = (event) => {this.setState({selectValue: event.target.value})}


    verificaForm = () => {
        this.state.inputCursoValue === '' ? this.setState({verificaCurso: true}) : this.setState({verificaCurso: false})
        this.state.selectValue === '' ? this.setState({verificaSelect: true}) : this.setState({verificaSelect: false})

        if (
            this.state.inputCursoValue !== '' &&
            this.state.selectValue !== '' &&
            this.state.selectValue !== '(selecione uma opção)'
           )
           {
            this.setState({completo: true})
            this.props.verificaEtapa(true)
        } else {
            alert('Você deve preencher todas as perguntas obrigatórias antes de continuar')
        }
    }

    render() {
        return(
            <EtapaBox>
                <PerguntaAberta
                    pergunta={'Por que você não terminou um curso de graduação?'}
                    onChangeFunc={this.onChangeCurso}
                    valor={this.state.inputCursoValue}
                    verifica = {this.state.verificaCurso}
                />
                <PerguntaFechada
                    onChangeFunc={this.onChangeSelect}
                    pergunta={'Você fez algum curso complementar'}
                    opcoes = {[
                        '(selecione uma opção)',
                        'Curso técnico',
                        'Cursos de inglês',
                        'Não fiz curso complementar',
                    ]}
                    verifica = {this.state.verificaSelect}
                />
                {/* <ContinuarBtn onClick={this.verificaForm} >Continuar</ContinuarBtn> */}
                <ContinuarBtn onClick={() => this.props.verificaEtapa(true)} >Continuar</ContinuarBtn>
            </EtapaBox>
        )
    }
}