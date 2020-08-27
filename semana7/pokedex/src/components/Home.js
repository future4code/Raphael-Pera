import React from 'react'
import styled from 'styled-components'
import { Items_Page } from './Items_Page'


const HomeBox = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(210,210,210);
`

const Header = styled.header`
    box-sizing: border-box;
    position: fixed;
    top:0;
    left:0;
    min-height: 80px;
    min-width: 99vw;
    padding: 0 30px;
    background-color:rgb(50,50,50);
    color: white;
    box-shadow: 0 2px 2px rgb(200,200,200);
    display: flex;
    align-items: center;
    justify-content: flex-start;
`


export class Home extends React.Component {
    state = {}

    render() {
        return(
            <HomeBox>
                <Header><h1>Pokédex</h1></Header>
                <Items_Page/>
            </HomeBox>
            
        )
    }
}
