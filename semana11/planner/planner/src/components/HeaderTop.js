import React, {useState, /*useEffect*/} from 'react'
import styled from 'styled-components'
// import axios from 'axios'
// import { baseUrl } from './APIData'


const Box = styled.header`
    background-color: whitesmoke;
    min-width: 100vw;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const Form = styled.div`
    /* background-color: lightgreen; */
    min-width: 400px;
    width: 50%;
    display: flex;
    justify-content: space-between;
`

const Input = styled.input`
    flex-grow: 1;
`

const Select = styled.select`
    margin-left: 3px;
`

const Btn = styled.button`
    margin-left: 3px;
`


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

    const createTask=()=>{
        if (inputValue !== '') {
            props.createTask(inputValue, selectValue)
            // setInputValue('')
        }
    }


    const inputChange = (event) => {
        setInputValue(event.target.value)
        // console.log('HeaderTop > inputChange', event.target.value)
    }

    const enterTask = (event) => {event.key === 'Enter' && createTask()}

    const selectChange = (event) => {
        setSelectValue(event.target.value)
        // console.log('HeaderTop > selectChange', event.target.value)
    }

    return (
        <Box onKeyDown={enterTask} >
            <Form>
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
                <Btn onClick={createTask} >Criar Tarefa</Btn>
            </Form>
        </Box>
    )
}