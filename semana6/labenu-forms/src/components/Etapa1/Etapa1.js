import React from 'react'
import styled from 'styled-components'
import { PerguntaAberta } from '../PerguntaAberta/PerguntaAberta'
import { PerguntaFechada } from '../PerguntaFechada/PerguntaFechada'


const EtapaBox = styled.div``


export class Etapa1 extends React.Component {
    render() {
        return(
            <EtapaBox>
                <PerguntaAberta pergunta={'Nome'}/>
                <PerguntaAberta pergunta={'Idade'}/>
                <PerguntaAberta pergunta={'Email'}/>
                <PerguntaFechada 
                    pergunta={'Qual o grau de escolaridade?'}
                    opcoes={[
                        'Ensino Médio Incompleto',
                        'Ensino Médio Completo',
                        'Ensino Superior Incompleto',
                        'Ensino Superior Completo',
                    ]}
                />
            </EtapaBox>
        )
    }
}