import React from "react";
import { render, fireEvent, screen, wait, act } from "@testing-library/react";
import App from "../App";
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import { baseUrl } from './APIData'

axios.get = jest.fn().mockResolvedValue({ data: [] })
axios.post = jest.fn().mockResolvedValue({})
axios.put = jest.fn().mockResolvedValue({})
axios.delete = jest.fn().mockResolvedValue({})


describe('Testa o Planner de forma geral', ()=>{
    test('renderizar tarefas', async ()=>{
        axios.get = jest.fn().mockResolvedValue({
            data:[
                {day:'1', id:'abc1', text: 'Fritar batata'},
                {day:'2', id:'abc2', text: 'Não comer nada'},
                {day:'1', id:'abc3', text: 'Ver se tem comida'},
                {day:'4', id:'abc4', text: 'Comer o que sobrou'},
            ]
        })

        render(<App/>)
        const task1 = await screen.findByText('Fritar batata')
        const task2 = await screen.findByText('Não comer nada')
        const task3 = await screen.findByText('Ver se tem comida')
        const task4 = await screen.findByText('Comer o que sobrou')
    })

    test('criar nova tarefa', async ()=>{
        render(<App/>)
        await wait()

        const input = await screen.findByPlaceholderText('Descrição da tarefa')
        const taskDesc = 'Tarefa Teste 2'
        await userEvent.type(input, taskDesc)
        expect(input).toHaveValue(taskDesc)

        const createTaskBtn = screen.getByText('Criar Tarefa')
        userEvent.click(createTaskBtn)
        expect(axios.post).toHaveBeenCalled()
        expect(axios.post).toHaveBeenCalledWith(baseUrl, {text: taskDesc, day: 1,})
    })

})

