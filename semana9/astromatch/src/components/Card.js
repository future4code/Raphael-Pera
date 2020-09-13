import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const Box = styled.div`
    background-color: rgb(240,240,240);
    border: 1px solid rgb(100,100,100);
    display:grid;
    place-items: center;
`

const CardProf = styled.div`
    width: 90%;
    height: 91%;
    box-shadow: 0 -1px 6px rgb(160,160,160);
    border-radius: 10px;
    position: relative;
    padding: 0;
    overflow: hidden;
`

const CardImg = styled.img`
    width: 100%;
    border-radius: 10px;
`

const CardInfo = styled.div`
    position: absolute;
    width: 100%;
    bottom: -1px;
    left: 0;
    padding: 0 15px;
    border-radius: 0 0 10px 10px;
    color: white;
    text-align: left;
    background-image: linear-gradient(to bottom, rgba(50,50,50,0), rgba(50,50,50,0.2), rgba(50,50,50,0.5), rgba(50,50,50,0.8));
`

const CardName = styled.h2``

const CardDesc = styled.p``


export function Card(props){
    const [prof, setProf] = useState({})

    useEffect(()=>{
        // console.log('Card',props.profile)
        setProf(props.profile)
    },[props.profile])

    const profName = prof.name
    const profAge = prof.age
    const profDesc = prof.bio
    const imgUrl = prof.photo
    return(
        <Box>
            <CardProf>
                <CardImg src={imgUrl}/>
                <CardInfo>
                    <CardName>{profName} {profAge}</CardName>
                    <CardDesc>{profDesc}</CardDesc>
                </CardInfo>
            </CardProf>
            
        </Box>
    )
}