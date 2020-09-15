import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl } from './ApiConfig'
import { HeaderTop } from './HeaderTop'
import { Card } from './Card'
import { NavBottom } from './NavBottom'
import { MatchList } from './MatchList'


const Box = styled.div`
    /* background-color: rgb(240,240,240); */
    /* border: 1px solid black; */
    display:grid;
    grid-template:calc(10vh - 7px) 74vh calc(16vh - 7px) / 100%;
    min-width: 300px;
    max-width: 400px;
    width: 96%; 
    height: 100vh;
    padding: 7px 0;
`


export function Principal(){
    const [newProf, setNewProf] = useState({})
    const [cardORlist, setCardORlist] = useState('card')
    const [clearList, setClearList] = useState(false)

    useEffect(()=>{
        // console.log('Principal > useEffect')
        picNewProf()
    },[])


    const picNewProf=()=> {
        axios
            .get(`${baseUrl}/person`)
                .then(response => {
                setNewProf(response.data.profile)
                // console.log('picNewProf > then',response.data.profile)
                })
                .catch(err => {
                console.log(err)
                })
    }

    const choosePerson=(choice)=>{
        // console.log(newProf)
        const body={
            ...newProf,
            "choice": choice
        }

        axios
            .post(`${baseUrl}/choose-person`,body)
                .then(response=>{
                    // console.log(`choosePerson: ${choice}`, `isMatch: ${response.data.isMatch}`)
                })
                .catch(err=>{
                    console.log(err)
                })
    }


    const rejectClick=()=>{
        choosePerson(false)
        picNewProf()
    }

    const matchClick=()=>{
        choosePerson(true)
        picNewProf()
    }

    const listClick=()=>{
        cardORlist === 'card' ? setCardORlist('list') : setCardORlist('card')
    }

    const clearClick=()=>{
        axios
            .put(`${baseUrl}/clear`)
                .then(response=>{
                    // console.log(response)
                    setClearList(!clearList)
                })
                .catch(err=>{
                    console.log(err)
                })
    }

    return(
        <Box>
            <HeaderTop
                listClick={listClick}
                cardORlist={cardORlist}
                clearClick={clearClick}
            />

            {cardORlist === 'card' ?
                <Card
                    profile={newProf}
                />
            :
                <MatchList
                    clearList={clearList}
                />
            }

            {cardORlist === 'card' && 
                <NavBottom
                    profile={newProf}
                    reject={rejectClick}
                    match={matchClick}
                />
            }

        </Box>
    )
}
