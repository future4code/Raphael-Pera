import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { SideBar } from './SideBar'
import { HomeHeader } from './HomeHeader'
import { ItemList } from './ItemList'

const Box = styled.div`
    background-color: lightcoral;
    display:grid;
    grid-template: 1fr / 200px 1fr;
`

const Main = styled.main`
    display: grid;
    grid-template: 50px 1fr / 1fr;
`

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/'
const baseHeaders = {headers:{Authorization: 'raphael-ribeiro-jackson'}}


export class Home extends React.Component {
    state={
        playlists:[],
        
    }

    componentDidMount(){
        this.getAllPlayLists()
    }

    getAllPlayLists=()=>{
        const request = axios.get(baseUrl, baseHeaders)
        .then((response)=>{
            console.log(response.data.result.list)
            this.setState({playlists:response.data.result.list})
        })
        .catch((error)=>{console.log(error)})
    }

    render(){
        // this.getAllPlayLists()
        console.log('render')
        console.log(this.state.playlists)
        return(
            <Box>
                <SideBar/>
                <Main>
                    <HomeHeader/>
                    <ItemList
                        type={'playlist'}
                        // type={'track'}
                        items={this.state.playlists}
                    />
                </Main>
            </Box>
        )
    }
}