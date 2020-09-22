import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test('teste - Criar novo post',()=>{
    const {getByText, getByPlaceholderText} = render(<App/>)
    
    const postBtnAdicionar = getByText('Adicionar')
    const postInput = getByPlaceholderText('Novo post')

    fireEvent.change(postInput,{target:{value:'Post teste'}})
    fireEvent.click(postBtnAdicionar)
    
    const postNew = getByText('Post teste')
})


test('teste - Curtir post',()=>{
    const {getByText, getByPlaceholderText} = render(<App/>)
    
    const postBtnAdicionar = getByText('Adicionar')
    const postInput = getByPlaceholderText('Novo post')

    fireEvent.change(postInput,{target:{value:'Post teste'}})
    fireEvent.click(postBtnAdicionar)
    
    const postNew = getByText('Post teste')

    const curtirBtn = getByText('Curtir')
    fireEvent.click(curtirBtn)
})

test('teste - Descurtir post',()=>{
    const {getByText, getByPlaceholderText} = render(<App/>)
    
    const postBtnAdicionar = getByText('Adicionar')
    const postInput = getByPlaceholderText('Novo post')

    fireEvent.change(postInput,{target:{value:'Post teste'}})
    fireEvent.click(postBtnAdicionar)
    
    const postNew = getByText('Post teste')

    let curtirBtn = getByText('Curtir')
    fireEvent.click(curtirBtn)

    const descurtirBtn = getByText('Descurtir')
    fireEvent.click(descurtirBtn)

    curtirBtn = getByText('Curtir')
})


test('teste - Apagar post',()=>{
    const {getByText, getByPlaceholderText, queryByText} = render(<App/>)
    
    const postBtnAdicionar = getByText('Adicionar')
    const postInput = getByPlaceholderText('Novo post')

    fireEvent.change(postInput,{target:{value:'Post teste'}})
    fireEvent.click(postBtnAdicionar)

    let postNew = getByText('Post teste')
    
    const postBtnApagar = getByText('Apagar')
    fireEvent.click(postBtnApagar)

    postNew = queryByText('Post teste')
    expect(postNew).toEqual(null)
})


test('teste - limpar input',()=>{
    const {getByText, getByPlaceholderText, queryByText, queryByDisplayValue} = render(<App/>)
    
    const postBtnAdicionar = getByText('Adicionar')
    const postInput = getByPlaceholderText('Novo post')

    fireEvent.change(postInput,{target:{value:'Post teste'}})
    fireEvent.click(postBtnAdicionar)

    const inputValue = queryByDisplayValue('Post teste')
    expect(inputValue).toEqual(null)
})


test('teste - mensagem "Nenhum post!" deve aparecer',()=>{
    const {getByText, getByPlaceholderText, queryByText, queryByDisplayValue} = render(<App/>)
    
    const msgNoPost = queryByText('Nenhum post!')
    expect(msgNoPost).not.toEqual(null)
})


test('teste - mensagem "Nenhum post!" NÃO deve aparecer',()=>{
    const {getByText, getByPlaceholderText, queryByText, queryByDisplayValue} = render(<App/>)

    const postBtnAdicionar = getByText('Adicionar')
    const postInput = getByPlaceholderText('Novo post')

    fireEvent.change(postInput,{target:{value:'Post teste'}})
    fireEvent.click(postBtnAdicionar)

    const postNew = getByText('Post teste')

    const msgNoPost = queryByText('Nenhum post!')
    expect(msgNoPost).toEqual(null)
})


test('teste - quantidade de posts deve ser mostrada "Quantidade de posts: 1+" ',()=>{
    const {getByText, getByPlaceholderText, queryByText, queryByDisplayValue} = render(<App/>)

    const postBtnAdicionar = getByText('Adicionar')
    const postInput = getByPlaceholderText('Novo post')

    fireEvent.change(postInput,{target:{value:'Post teste'}})
    fireEvent.click(postBtnAdicionar)

    const postNew = getByText('Post teste')

    const msgQtdPost = getByText('Quantidade de posts: 1')
})


test('teste - Postagem com input vazio NÃO deve criar novo post',()=>{
    const {getByText, getByPlaceholderText, queryByText, queryByDisplayValue} = render(<App/>)
    
    const postBtnAdicionar = getByText('Adicionar')
    const postInput = getByPlaceholderText('Novo post')

    fireEvent.change(postInput,{target:{value:''}})
    fireEvent.click(postBtnAdicionar)

    const msgNoPost = getByText('Nenhum post!')
})


test('teste - Mensagem de input vazio',()=>{
    const {getByText, getByPlaceholderText, queryByText, queryByDisplayValue} = render(<App/>)
    
    const postBtnAdicionar = getByText('Adicionar')
    const postInput = getByPlaceholderText('Novo post')

    fireEvent.change(postInput,{target:{value:''}})
    fireEvent.click(postBtnAdicionar)
    
    const msgEmptyPost = getByText('Por favor informe a mensagem do post')
})

