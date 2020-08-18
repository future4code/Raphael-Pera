import React from 'react'
import {Tela, Main, Title, InputBox, Input, BtnAdicionar, TaskItem, TaskItemComplete} from './InicioStyle'
import { FltSection, FltTitleBox, FltTitle, FltSelect, FltUl, FltLi} from '../FilterSection/FilterSectionStyle'
import {Tarefa} from '../Tarefa/Tarefa'




export class Inicio extends React.Component {

    state = {
        taskValue:'',
        tasks: [],
        selectValue:'Pendente',
    }

    onChangeInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onClickAdicionar = () => {
        if (this.state.taskValue !== '') {
            const taskNova = {id: Date.now(), tarefa: this.state.taskValue, status: 'Pendente'}
            this.setState({tasks: [...this.state.tasks, taskNova], taskValue: '',})
        }
    }

    onChangeSelect = (event) => {
        this.setState({selectValue: event.target.value})
        console.log(`select: ${event.target.value} `)
    }

    onClickTask = (id) => {
        console.log(`onClickTask: ${id}`)
        const tasksNova = this.state.tasks.map((task) => {
            if (task.id === id) {task.status = "Completa"}
        })
        console.log(tasksNova)
        // this.setState({tasks: tasksNova})
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
                        <FltSection>
                            <FltTitleBox>
                                <FltTitle>
                                    {this.state.selectValue === 'Pendente' && "Tarefas Pendentes"}
                                    {this.state.selectValue === 'Completa' && "Tarefas Completas"}
                                    {this.state.selectValue === 'Todas' && "Todas Tarefas"}
                                </FltTitle>
                                <FltSelect onChange={this.onChangeSelect} >
                                    <option value={'Pendente'}>Pendentes</option>
                                    <option value={'Completa'}>Completas</option>
                                    <option value={'Todas'}>Todas</option>
                                </FltSelect>
                            </FltTitleBox>
                            <FltUl>
                                {this.state.tasks.map((task) => {return(
                                    (task.status === this.state.selectValue ||this.state.selectValue === 'Todas') &&
                                              
                                    <TaskItem onClick={() => this.onClickTask(task.id)}>
                                        {task.id}: {task.tarefa}
                                    </TaskItem>
                                    )
                                })}
                            </FltUl>
                        </FltSection>
                    }
                </Main>
            </Tela>
        )
    }
}