import React from 'react'
import styled from 'styled-components'
import { CreatePL } from './CreatePL'

const Box = styled.div`
    max-width: 200px;
    min-height: 100vh;
    border: 1x solid black;
    /* background-color: lightgreen; */
    background-color: rgb(30,30,30);
    color: rgb(210,210,210);
`

const SideLogo = styled.div`
    /* padding: 20px 0 20px 25px; */
    padding: 10px 5px;
    margin: 20px 10px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: white;
    /* background-color: rgb(134, 233, 134); */
    background-color: rgb(107, 218, 107);
    border-radius: 25px;
`

const SideBtn = styled.div`
    padding: 12px 0 12px 30px;
    text-align: left;
    cursor: pointer;
    transition: 0.2s;
    :hover{
        color:white;
        background: rgb(60,60,60);
    }
`

export class SideBar extends React.Component{
    state={
        creatingPL: false,
    }

    onClickCriar=()=>{
        this.setState({creatingPL: !this.state.creatingPL})
    }

    onCreate=(inputValue)=>{
        console.log(inputValue)
        this.setState({creatingPL: !this.state.creatingPL})
        this.props.atualizar()
    }

    render(){
        return(
            <Box>
                <SideLogo>Labefy</SideLogo>
                <SideBtn>Início</SideBtn>
                <SideBtn>Musicas</SideBtn>
                <SideBtn onClick={this.props.sideBarPLBtn} >Playlists</SideBtn>
                <SideBtn onClick={this.onClickCriar}>Criar Playlist</SideBtn>
                {this.state.creatingPL && <CreatePL onClickCriar={this.onCreate} ></CreatePL>}
            </Box>
        )
    }
}
