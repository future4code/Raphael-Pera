import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { HeaderTop } from './HeaderTop'
import { Card } from './Card'
import { NavBottom } from './NavBottom'


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

    useEffect(()=>{
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:raphaelRibeiro/person`)
        .then(response => {
          setNewProf(response.data.profile)
        //   console.log('useEffect > then',response.data.profile)
        })
        .catch(err => {
          console.log(err)
        })
    },[])


    return(
        <Box>
            <HeaderTop></HeaderTop>
            <Card
                profile={newProf}
            />
            <NavBottom></NavBottom>
        </Box>
    )
}
