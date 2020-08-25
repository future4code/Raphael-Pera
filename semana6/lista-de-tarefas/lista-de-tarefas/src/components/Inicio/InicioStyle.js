import styled from 'styled-components'


export const Tela = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const Main = styled.main`
    min-width: 300px;
    width: 50vw;
    min-height: 200px;
    border: 1px solid black;
    background-color: rgb(245,245,245);
    padding: 0 30px;
`

export const Title = styled.h2`
    width: 100%;
`

export const InputBox = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
    margin: 25px 0 0 0;
`

export const Input = styled.input`
    margin-right: 10px;
    width: 70%;
    min-width: 5px;
    border:none;
    box-shadow: 0 2px 2px rgb(200,200,200);
    padding-left: 7px;
`

export const BtnAdicionar = styled.button`
    margin: 0;
    padding: 0;
    border: none;
    background-color: rgb(44, 175, 44);
    color: white;
    box-shadow: 0 2px 2px rgb(200,200,200);
    padding: 10px 15px;
`

export const TaskItemComplete = styled.li`
    text-decoration:line-through;
    color: rgb(120,120,120);
    width: 100%;
    text-align: left;
    padding: 7px 0 7px 15px;
    word-wrap: break-word;
`

export const TaskItem = styled.li`
    width: 100%;
    text-align: left;
    padding: 7px 0 7px 15px;
    word-wrap: break-word;
`