import React from 'react'
import { FltSection, FltTitleBox, FltTitle, FltSelect, FltUl, FltLi} from './FilterSectionStyle'


export class FilterSection extends React.Component {

    state = {
        selectValue:'Pendente',
        tasks: [],
    }

    onChangeSelect = (event) => {
        this.setState({selectValue: event.target.value})
        console.log(`select: ${event.target.value} `)
    }

    onClickTask = (id) => {
        console.log(`onClickTask: ${id}`)
        const tasksNova = this.props.tarefas.filter((task) => {
            return task.id !== id
        })
        console.log(tasksNova)
    }

    render() {
        console.log('FilterSection:')
        console.log(this.state.tasks)
        return(
            <FltSection>
                <FltTitleBox>
                    <FltTitle>Tarefas Pendentes</FltTitle>
                    <FltSelect onChange={this.onChangeSelect} >
                        <option value={'Pendente'}>Pendentes</option>
                        <option value={'Completa'}>Completas</option>
                        <option value={'Todas'}>Todas</option>
                    </FltSelect>
                </FltTitleBox>
                <FltUl>
                    {this.props.tarefas.map((task) => {return(
                        (task.status === this.state.selectValue ||this.state.selectValue === 'Todas') &&
                            <FltLi onClick={() => this.onClickTask(task.id)} >
                                {`${task.id}: ${task.tarefa}`}
                            </FltLi>
                        )
                     })}
                    
                    <FltLi></FltLi>
                    <FltLi></FltLi>
                    <FltLi></FltLi>
                    <FltLi></FltLi>
                </FltUl>
            </FltSection>
        )
    }

}

