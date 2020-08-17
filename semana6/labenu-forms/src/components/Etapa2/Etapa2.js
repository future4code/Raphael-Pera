import React from 'react'
import styled from 'styled-components'
import { PerguntaAberta } from '../PerguntaAberta/PerguntaAberta'


const EtapaBox = styled.div``


export class Etapa2 extends React.Component {
    render(){
        return(
            <EtapaBox>
                <PerguntaAberta pergunta={'Qual o curso?'}/>
                <PerguntaAberta pergunta={'Qual a unidade de ensino?'}/>
            </EtapaBox>
        )
    }

}