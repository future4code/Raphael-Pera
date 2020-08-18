import React from 'react'
import styled from 'styled-components'
import { PerguntaAberta } from '../PerguntaAberta/PerguntaAberta'


const EtapaBox = styled.div`
    display: flex;
    flex-direction: column;
`

const ContinuarBtn = styled.button`
    width: 100px;
    padding: 3px 0;
`


export class Etapa2 extends React.Component {
    state = {
        completo: false,
        inputCursoValue:'',
        inputUnidadeValue:'',

        verificaCurso: false,
        verificaUnidade: false,
    }

    onChangeCurso = (event) => {this.setState({inputCursoValue: event.target.value})}
    onChangeUnidade = (event) => {this.setState({inputUnidadeValue: event.target.value})}


    verificaForm = () => {
        this.state.inputCursoValue === '' ? this.setState({verificaCurso: true}) : this.setState({verificaCurso: false})
        this.state.inputUnidadeValue === '' ? this.setState({verificaUnidade: true}) : this.setState({verificaUnidade: false})

        if (
            this.state.inputCursoValue !== '' &&
            this.state.inputUnidadeValue !== ''
           )
           {
            this.setState({completo: true})
            this.props.verificaEtapa(true)
        } else {
            alert('Você deve preencher todas as perguntas obrigatórias antes de continuar')
        }
    }


    render(){
        return(
            <EtapaBox>
                <PerguntaAberta
                    pergunta={'Qual o curso?'}
                    onChangeFunc={this.onChangeCurso}
                    valor={this.state.inputCursoValue}
                    verifica = {this.state.verificaCurso}
                />
                <PerguntaAberta
                    pergunta={'Qual a unidade de ensino?'}
                    onChangeFunc={this.onChangeUnidade}
                    valor={this.state.inputUnidadeValue}
                    verifica = {this.state.verificaUnidade}
                />
                <ContinuarBtn onClick={this.verificaForm} >Continuar</ContinuarBtn>
            </EtapaBox>
        )
    }

}