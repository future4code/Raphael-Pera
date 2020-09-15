import React from 'react'
import styled from 'styled-components'
import TestImg from '../img/testtrip.webp'


const Box = styled.div`
    background-color: rgb(245,245,245);
    border: 1px solid black;
    min-width: 270px;
    /* min-height: 350px; */
`

const Img = styled.img`
    width: 100%;
`

const Title = styled.h3`
    padding: 0 15px;
    text-align: left;
`

const Desc = styled.p`
    padding: 0 15px;
    text-align: left;
`

const Price = styled.p`
    padding: 0 15px;
    text-align: left;
`

export const TripCard = (props) => {
    return(
        <Box>
            <Img src={TestImg} ></Img>
            <Title>Viagem teste</Title>
            <Desc>Imperdivel! Quase 50% de chances de chegarmos ao destino em segurança</Desc>
            <Price>R$ 1000 zilions</Price>
        </Box>
    )
}