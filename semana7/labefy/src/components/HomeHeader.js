import React from 'react'
import styled from 'styled-components'


const Header = styled.header`
    background-color: rgb(30,30,30);
    /* min-height: 60px; */
    border-bottom: 1px solid rgb(50,50,50);
    border-left: 1px solid rgb(50,50,50);
    color: white;
`

export class HomeHeader extends React.Component{
    render(){
        return(
            <Header>
                Hello HomeHeader
            </Header>
        )
    }
}
