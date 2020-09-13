import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl } from './ApiConfig'
import { MatchListLine } from './MatchListLine'

const Box = styled.div`
    background-color: rgb(240,240,240);
    border: 1px solid rgb(100,100,100);
    padding: 10px 0 0 0;
    overflow: auto;
`

export function MatchList(props){
    const [matchList, setMatchList] = useState([])

    useEffect(()=>{
        // console.log(`MatchList > useEffect > clearList: ${props.clearList}`)
        newMatchList()
    },[props.clearList])

    const newMatchList=()=> {
        axios
            .get(`${baseUrl}/matches`)
            .then(response => {
                setMatchList(response.data.matches)
                // console.log('newMatchList > then',response.data.matches)
            })
            .catch(err => {
            console.log(err)
            })
    }

    const list =(
        matchList.map((prof, index)=>{
            return <MatchListLine key={index} prof={prof} />
        })
    )
    

    return(
        <Box>
            {/* {matchList.map(prof=>{
                return <p>{prof.name}</p>
            })} */}
            {list}
        </Box>
    )
}

