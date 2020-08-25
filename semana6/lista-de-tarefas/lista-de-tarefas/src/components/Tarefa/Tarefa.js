import React from 'react'
import { TaskItem } from './TarefaStyle'





export class Tarefa extends React.Component {
    render() {
        console.log(`tarefa: ${this.props.taskMsg} `)
        return(
            <TaskItem>
                {this.props.taskStatus === "Completa" &&
                    this.props.taskMsg
                }
            </TaskItem>
            
        )
    }
}