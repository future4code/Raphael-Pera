import React from 'react'
import { FltSection, FltTitleBox, FltTitle, FltSelect, FltUl, FltLi} from './FilterSectionStyle'


export class FilterSection extends React.Component {

    state = {
        selectValue:'Pendentes',
    }

    onChangeSelect = (event) => {
        this.setState({selectValue: event.target.value})
        console.log(`select: ${event.target.value} `)
    }

    render() {
        console.log(this.state.selectValue, this.props.tarefas)
        return(
            <FltSection>
                <FltTitleBox>
                    <FltTitle>Tarefas Pendentes</FltTitle>
                    <FltSelect onChange={this.onChangeSelect} >
                        <option value={'Todas'}>Todas</option>
                        <option value={'Completas'}>Completas</option>
                        <option value={'Pendentes'}>Pendentes</option>
                    </FltSelect>
                </FltTitleBox>
                <FltUl>
                    {this.props.tarefas.map((task) => {
                        return(
                            task.status === this.state.selectValue &&
                                <FltLi>{task.tarefa}</FltLi>
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

