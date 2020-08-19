import React from 'react'
import {Tela, Main, Title, InputBox, Input, BtnAdicionar, TaskItem, TaskItemComplete} from './InicioStyle'
import { FltSection, FltTitleBox, FltTitle, FltSelect, FltUl} from '../FilterSection/FilterSectionStyle'



export class Inicio extends React.Component {

    state = {
        taskValue:'',
        tasks: [],
        selectValue:0,
    }

    componentDidMount() {
        console.log(this.state.selectValue)
    }

    onChangeInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onClickAdicionar = () => {
        if (this.state.taskValue !== '') {
            const taskNova = {id: Date.now(), tarefa: this.state.taskValue, completa: false}
            this.setState({tasks: [...this.state.tasks, taskNova], taskValue: '',})
        }
    }

    onKeyDownForm = (event) => {event.key === 'Enter' && this.onClickAdicionar()}


    onChangeSelect = (event) => {
        if (event.target.value === 'Completas') {
            this.setState({selectValue: true})
        } else if (event.target.value === 'Pendentes') {
            this.setState({selectValue: false})
        } else {
            this.setState({selectValue: 0})
        }
    }

    onClickTask = (id) => {
        console.log(`onClickTask: ${id}`)
        const tasksNova = this.state.tasks.map((task) => {
            return (
                task.id === id ?
                {id: task.id, tarefa: task.tarefa, completa: !task.completa} :
                {id: task.id, tarefa: task.tarefa, completa: task.completa}
            )
        })
        // console.log(tasksNova)
        this.setState({tasks: tasksNova})
    }

    render() {
        // console.log('render()')
        // console.log(this.state.tasks)

        const novaLista = this.state.tasks.map((task) => {return(
            (task.completa === this.state.selectValue || this.state.selectValue === 0)&&
            (task.completa === true ?
                <TaskItemComplete onClick={() => this.onClickTask(task.id)}>{task.tarefa}</TaskItemComplete>
                :
                <TaskItem onClick={() => this.onClickTask(task.id)}>{task.tarefa}</TaskItem>
            )
        )})


        return(
            <Tela>
                <Main>
                    <Title>Lista de Tarefas</Title>
                    <InputBox onKeyDown={this.onKeyDownForm}>
                        <Input
                            name={'taskValue'}
                            placeholder={'Descrição da tarefa...'}
                            onChange={this.onChangeInput}
                            value={this.state.taskValue}
                        />
                        <BtnAdicionar onClick={this.onClickAdicionar}>Adicionar</BtnAdicionar>
                    </InputBox>
                    <FltSection>
                        <FltTitleBox>
                            <FltTitle>
                                {this.state.selectValue === false && "Tarefas Pendentes"}
                                {this.state.selectValue === true && "Tarefas Completas"}
                                {this.state.selectValue === 0 && "Todas Tarefas"}
                            </FltTitle>
                            <FltSelect onChange={this.onChangeSelect} >
                                <option value={'Todas'}>Todas</option>
                                <option value={'Pendentes'}>Pendentes</option>
                                <option value={'Completas'}>Completas</option>
                            </FltSelect>
                        </FltTitleBox>
                        <FltUl>
                            {novaLista}
                        </FltUl>
                    </FltSection>
                </Main>
            </Tela>
        )
    }
}