import React from 'react'
import styled from 'styled-components'
import { Items_Page } from './Items_Page'

const HomeBox = styled.div`
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.header`
    min-height: 60px;
    min-width: 99vw;
    background-color:salmon;
`


export class Home extends React.Component {
    state = {}

    render() {
        return(
            <HomeBox>
                <Header></Header>
                <Items_Page/>
            </HomeBox>
            
        )
    }
}
