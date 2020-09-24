import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl } from './APIData'


const Box = styled.header`

`

const Input = styled.input``

const Select = styled.select``

const Btn = styled.button``


export const HeaderTop = (props) => {
    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState(1)


    // const criarTarefa = () => {
    //     const body = {text: inputValue,day: selectValue,}
    //     console.log(body)
    //     axios.post(baseUrl, body)
    //         .then(response=>{console.log(response)})
    //         .catch(err=>{console.log(err)})
    // }


    const inputChange = (event) => {
        setInputValue(event.target.value)
        // console.log('HeaderTop > inputChange', event.target.value)
    }

    const selectChange = (event) => {
        setSelectValue(event.target.value)
        // console.log('HeaderTop > selectChange', event.target.value)
    }

    return (
        <Box>
            <Input
                placeholder={'Descrição da tarefa'}
                onChange={inputChange}
                value={inputValue}
            />
            <Select onChange={selectChange} value={selectValue}>
                <option value={'1'}>Domingo</option>
                <option value={'2'}>Segunda</option>
                <option value={'3'}>Terça</option>
                <option value={'4'}>Quarta</option>
                <option value={'5'}>Quinta</option>
                <option value={'6'}>Sexta</option>
                <option value={'7'}>Sábado</option>
            </Select>
            <Btn onClick={()=>props.createTask(inputValue, selectValue) } >Criar Tarefa</Btn>
        </Box>
    )
}