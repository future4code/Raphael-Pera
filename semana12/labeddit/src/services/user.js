import axios from 'axios'
import { baseUrl } from '../constants/url'
import { goToFeed } from '../routes/Cordinator'


export const login = (body, history, setButtonName) => {
    console.log('submit valido', body)
    axios.post(`${baseUrl}/login`, body)
        .then(response=>{
            console.log(response)
            localStorage.setItem('token', response.data.token)
            goToFeed(history)
            setButtonName('Logout')
        })
        .catch(err=>{
            // console.log('login > catch', err.response.data.message)
            alert(`${err.response.data.message}! Revise os dados informados e tente novamente.`)
        })
}


export const signUp = (body, history) => {
    // console.log(body)
    axios.post(`${baseUrl}/signup`, body)
        .then(response=>{
            console.log(response.data)
            // localStorage.setItem('token', response.data.token)
            goToFeed(history)
        })
        .catch(err=>{
            // console.log(err.response.data.message)
            alert(`${err.response.data.message}! Revise as informações e tente novamente.`)
        })
}

