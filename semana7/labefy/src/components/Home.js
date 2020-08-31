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
        atualizar:true,
        listType:'playlist',
        PLID:'',
        playlistTracks:[],
        playtlist:{},
    }

    componentDidMount(){
        // console.log('componentDidMount')
        this.getAllPlayLists()
    }

    componentDidUpdate(){
        // this.getAllPlayLists()
    }

    getAllPlayLists=()=>{
        const request = axios.get(baseUrl, baseHeaders)
        request
            .then((response)=>{
                // console.log(response.data.result.list)
                // console.log('getAllPlayLists')
                this.setState({playlists:response.data.result.list})
            })
            .catch((error)=>{console.log('home > getAllPlayLists > error', error)})
    }


    getAllTracks=(playlist)=>{
        const request = axios.get(`${baseUrl}${playlist.id}/tracks`, baseHeaders)
        request
            .then((response)=>{
                this.setState({
                    listType:'track',
                    playlistTracks:response.data.result.tracks,
                    playlist: playlist
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }


    sideBarPLBtn=()=>{
        // console.log('home > atualizar')
        // this.setState({atualizar: !this.state.atualizar})
        this.getAllPlayLists()
        this.setState({listType:'playlist'})
    }

    enterPL=(playlist)=>{
        // console.log(playlist)
        // this.setState({listType:'track', PLID:conteudo.id})
        this.getAllTracks(playlist)
    }

    deletePL=(playlist)=>{
        if(window.confirm(`Deseja realmente excluir permanentemente a playlist "${playlist.name}"?`)){
            const request = axios.delete(`${baseUrl}${playlist.id}`, baseHeaders)
            request
                .then((response)=>{
                    console.log('deletePL >', response)
                    window.alert(`Playlist "${playlist.name}" excluida com sucesso!`)
                    this.getAllPlayLists()
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }

    addTrack=(track)=>{
        
        console.log('HOME > addTrack')
        this.setState({PLID: track.PLID})

        const body={name: track.name, artist: track.artist, url: track.url}
        const request = axios.post(`${baseUrl}${track.PLID}/tracks`, body, baseHeaders)
        request
            .then((response)=>{
                console.log('home > addTrack > response', response)
                // window.alert(`(home) Adicionar música ${track.name} (${track.PLID})`)
                window.alert(`Música "${track.name}" adicionada à playlist "${track.PLname}" com sucesso!`)
            })
            .catch((error)=>{
                console.log('home > addTrack > error', error)

            })
    }

    render(){
        // console.log(`HOME > atualizou`)

        return(
            <Box>
                <SideBar sideBarPLBtn={this.sideBarPLBtn}/>
                <Main>
                    <HomeHeader/>
                    <ItemList
                        type={this.state.listType}
                        playlists={this.state.playlists}
                        enterPL={this.enterPL}
                        deletePL={this.deletePL}
                        addTrack={this.addTrack}
                        PLID={this.state.PLID}
                        playlistTracks={this.state.playlistTracks}
                        playlist={this.state.playlist}
                    />
                </Main>
            </Box>
        )
    }
}