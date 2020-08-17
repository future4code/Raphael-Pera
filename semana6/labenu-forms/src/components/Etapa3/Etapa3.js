import React from 'react'
import styled from 'styled-components'
import { PerguntaAberta } from '../PerguntaAberta/PerguntaAberta'
import { PerguntaFechada } from '../PerguntaFechada/PerguntaFechada'


const EtapaBox = styled.div``


export class Etapa3 extends React.Component {
    render() {
        return(
            <EtapaBox>
                <PerguntaAberta pergunta={'Por que você não terminou um curso de graduação?'}/>
                <PerguntaFechada
                    pergunta={'Você fez algum curso complementar'}
                    opcoes = {[
                        'Curso técnico',
                        'Cursos de inglês',
                        'Não fiz curso complementar',
                    ]}
                />
            </EtapaBox>
        )
    }
}