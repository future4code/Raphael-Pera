import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToPage } from '../router/goToPage'


const HeaderBox = styled.header`
    /* background-color: #ADEDDF; */
    background-color: rgb(245,245,245);
    min-height: 130px;
    display: grid;
    /* grid-template: repeat(2, 1fr) / auto 1fr 50px; */
    grid-template-rows: 1fr auto;
    grid-template-columns: 50% auto;
    justify-content: space-between;
`

const LogoBox = styled.div`
    /* background-color: gray; */
    color: #550FED;
    padding: 0 30px;
    display: grid;
    justify-content: start;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    /* text-shadow: -3px 3px 2px #D8C6FF; */
`

const NavBar = styled.nav`
    /* background-color: coral; */
    align-self: end;
    display: flex;
    justify-content: space-evenly;
`

const NavBtn = styled.div`
    color: rgb(50,50,50);
    /* font-weight: bold; */
    padding: 15px 2px;
    width: 100%;
    cursor: pointer;

    transition: 0.1s;
    :hover{
        background-color: rgb(242,242,242);
        color: #550FED;
        font-weight: bold;
    }
    :active{
        background-color: rgb(242,242,242);
        color: #550FED;
        font-weight: bold;
        text-decoration: underline;
    }
`

const NavLogin = styled.nav`
    /* background-color: salmon; */
    display: flex;
    justify-content: space-evenly;
    min-width: 200px;
`

const NavLoginBtn = styled.div`
    /* background-color: green; */
    color: #550FED;
    padding: 20px 10px;
    height: auto;
    cursor: pointer;

    transition: 0.2s;
    :hover{text-decoration: underline;}
`


export const HeaderTop = () => {
    const history = useHistory()

    return(
        <HeaderBox>
            <LogoBox onClick={()=> goToPage(history, '/') } >DecoLabe</LogoBox>
            <NavLogin>
                <NavLoginBtn onClick={()=> goToPage(history, '/login') } >Login</NavLoginBtn>
                <NavLoginBtn onClick={()=> goToPage(history, '/signup') } >Sign Up</NavLoginBtn>
            </NavLogin>
            
            <NavBar>
                <NavBtn>Link</NavBtn>
                <NavBtn>Link</NavBtn>
                <NavBtn>Link</NavBtn>
                <NavBtn>Link</NavBtn>
                <NavBtn>Link</NavBtn>
                <NavBtn>Link</NavBtn>
            </NavBar>
        </HeaderBox>
    )
}
