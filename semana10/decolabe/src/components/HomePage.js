import React from 'react'
import styled from 'styled-components'
import { TripCard } from './TripCard'
import { HeaderTop } from './HeaderTop'


const Box = styled.div`

`

// const HeaderTop = styled.header`
//     background-color: #ADEDDF;
//     min-height: 130px;
//     display: flex;
// `

// const LogoBox = styled.div`
//     /* background-color: gray; */
//     color: #550FED;
//     width: auto;
//     padding: 0 15px;
//     display: grid;
//     place-items: center;
//     font-size: 30px;
//     font-weight: bold;
//     text-shadow: -3px 3px 2px #D8C6FF;
// `


const Frase = styled.h2`
    margin:0;
    padding: 50px 20px 25px 20px;
    text-align: left;
`

const TripBox = styled.div`
    padding: 25px 20px;
    display: grid;
    gap: 25px 15px;
    grid-template-columns: 1fr;
    @media screen and (min-width: 585px){grid-template-columns: repeat(2, 1fr);}
    @media screen and (min-width: 870px){grid-template-columns: repeat(3, 1fr);}
    @media screen and (min-width: 1140px){grid-template-columns: repeat(4, 1fr);}
`


export const HomePage = () => {
    return(
        <Box>
            <HeaderTop/>
            <Frase>
                Viaje com tudo resolvido! Pacotes com reserva flexível e que cumpram com os protocolos de segurança
            </Frase>
            <TripBox>
                <TripCard teste={'TripCard (props)'} />
                <TripCard teste={'TripCard (props)'} />
                <TripCard teste={'TripCard (props)'} />
                <TripCard teste={'TripCard (props)'} />
                <TripCard teste={'TripCard (props)'} />
            </TripBox>
        </Box>
    )
}