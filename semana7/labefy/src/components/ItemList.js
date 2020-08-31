import React from 'react'
import styled from 'styled-components'
import { ItemLine } from './ItemLine'

const Box = styled.div`
    background-color: rgb(70,70,70);
    color: white;
    padding: 0 20px 20px 20px;
`

const H2 = styled.h2`
    padding: 10px;
    margin: 20px 0;
    text-align:left;
`

const Header = styled.div`
    border-bottom: 1px solid rgb(120,120,120);
    color: rgb(220,220,220);
    margin: 20px 0;
    padding: 10px;
    display:grid;
    grid-template-rows: 30px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    justify-content: start;
    text-align:left;

    /* > span{background-color:green;} */
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align:left;
`

export class ItemList extends React.Component{
    
    render(){
        let header
        let lista
        switch (this.props.type) {
            case 'playlist':
                // console.log('ItemList > case: playlist')
                header=<Header><span>NOME</span></Header>
                lista = this.props.playlists.map((playlist)=>{
                    // console.log(item.id)
                    return <ItemLine
                                key={playlist.id}
                                playlist={playlist}
                                enterPL={this.props.enterPL}
                                deletePL={this.props.deletePL}
                                addTrack={this.props.addTrack}
                                itemType={'playlist'}
                            />
                })
                break;
            case 'track':
                header= <div>
                            <H2>{this.props.playlist.name}</H2>
                            <Header>
                                <span>NOME</span>
                                <span>ARTISTA</span>
                            </Header>
                        </div>
                lista = this.props.playlistTracks.map((track)=>{
                    // console.log(track)
                    return <ItemLine
                                key={track.id}
                                track={track}
                                itemType={'track'}
                            />
                })
                break;
            default:
                break;
        }

        return(
            <Box>
                {/* <Header>
                    <span>TÍTULO</span>
                    <span>ALBUM</span>
                </Header> */}
                {header}
                <List>
                    {lista}
                </List>
            </Box>
            
        )
    }
}