import React from 'react'
import {Tela, Main, Title, InputBox, Input, BtnAdicionar} from './InicioStyle'
import { FilterSection } from '../FilterSection/FilterSection'


export class InicioOld extends React.Component {

    state = {
        taskValue:'',
        tasks: [],
    }

    onChangeInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onClickAdicionar = () => {
        const taskNova = {id: Date.now(), tarefa: this.state.taskValue, status: 'Pendente'}
        this.setState({tasks: [...this.state.tasks, taskNova], taskValue: '',})
    }

    render() {
        return(
            <Tela>
                <Main>
                    <Title>Lista de Tarefas</Title>
                    <InputBox>
                        <Input
                            name={'taskValue'}
                            placeholder={'Descrição da tarefa...'}
                            onChange={this.onChangeInput}
                            value={this.state.taskValue}
                        />
                        <BtnAdicionar onClick={this.onClickAdicionar}>Adicionar</BtnAdicionar>
                    </InputBox>
                    { this.state.tasks.length>0 &&
                        <FilterSection
                            tarefas={this.state.tasks}
                        />
                    }
                </Main>
            </Tela>
        )
    }
}