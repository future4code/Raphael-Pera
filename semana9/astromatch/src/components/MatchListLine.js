import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Box = styled.div`
    width: 100%;
    padding: 10px 20px;
    :hover{background-color: rgb(230,230,230);}

    display: flex;
    align-items: center;
`

const Avatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: grid;
    place-items: center;
`

const Img = styled.img`
    width: 100%;
    position: center;
`

const Name = styled.p`
    margin: 0 0 0 20px;
    padding: 0;
`

export function MatchListLine(props){
    return(
        <Box>
            <Avatar>
                <Img src={props.prof.photo}></Img>
            </Avatar>
            <Name>{props.prof.name}</Name>
        </Box>
        
    )
}