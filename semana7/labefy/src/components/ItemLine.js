import React from 'react'
import styled from 'styled-components'
import { AddTrackForm } from './AddTrackForm'

const Box = styled.div`
    display:grid;
    /* grid-template:1fr / repeat(2, 1fr) minmax(40px, auto) 40px; */
    grid-template-rows: 1fr;
    /* grid-template-columns: repeat(2, 1fr) minmax(40px, auto) 40px; */
    grid-template-columns: ${(props)=>props.itemType==='playlist' ? '1fr minmax(40px, auto) 40px' : '1fr 1fr'} ;
    padding: 2px 0;
    border-bottom: thin solid rgb(80,80,80);
    transition: 0.1s;
    :hover{
        background-color: rgb(85,85,85);
    }

    >span{
        /* background-color: green; */
        /* border: 1px solid white; */
        /* padding: 10px 0 10px 10px; */

        :first-child{
            padding: 10px 0 10px 10px;
            :hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }

        :nth-child(2) {
            padding: 10px 0 10px 10px;
        }
    }
`

const AddPL = styled.span`
    text-align: center;
    padding: 10px 0;
    color:rgb(130,130,130);
    cursor: pointer;
    transition: 0.2s;
    :hover{
        /* background-color:rgb(120,120,120); */
        background-color:rgb(200,200,200);
        color: black;
        font-weight:bold;
        ::after{
            content: ' adicionar música';
            text-align: center;
            font-size: 12px;
            padding: 10px 2px;
            visibility: visible;
        }
    }
`

const DelPL = styled.span`
    text-align: center;
    padding: 10px 0;
    color:rgb(130,130,130);
    cursor: pointer;
    :hover{
        visibility: hidden;
        background-color:rgb(120,120,120);
        color: red;
        ::before{
            content: 'excluir';
            text-align: center;
            font-size: 12px;
            visibility: visible;
        }
    }
`




export class ItemLine extends React.Component{
    state={
        addTrackForm:false,
    }

    addTrackForm=()=>{this.setState({addTrackForm: !this.state.addTrackForm})}

    addTrack=(playlist)=>{
        // window.alert(`Adicionar música a ${playlist.name}`)
        // this.props.addTrack(playlist)
        this.addTrackForm()
    }

    deletePL=(playlist)=>{
        // window.alert(playlist.id + ' - ' + playlist.name)
        this.props.deletePL(playlist)
    }

    enterPL=(playlist)=>{
        // window.alert(`Entrar na Playlist ${conteudo}`)
        this.props.enterPL(playlist)
    }

    render(){
        // console.log(`ItemLine > atualizou`)
        let item
        switch (this.props.itemType) {
            case 'playlist':
                // console.log(`ItemLine > case: playlist`)
                item = <div>
                        <Box itemType={this.props.itemType} >
                            <span onClick={()=>this.enterPL(this.props.playlist)}>{this.props.playlist.name}</span>
                            <AddPL onClick={()=>this.addTrackForm()}>+</AddPL>
                            <DelPL onClick={()=>this.deletePL(this.props.playlist)}>x</DelPL>
                        </Box>
                        
                        {this.state.addTrackForm &&
                            <AddTrackForm
                                playlist={this.props.playlist}
                                addTrack={this.props.addTrack}
                                addTrackForm={this.addTrackForm}
                            />
                        }
                    </div>
                break;

            case 'track':
                // console.log(`ItemLine > case: track`)
                item =            
                    <div>
                        <Box itemType={this.props.itemType}>
                            <span>{this.props.track.name}</span>
                            <span>{this.props.track.artist}</span>
                        </Box>
                    </div>
                break;
            default:
                break;
        }

        // console.log(item)

        return(
            // <Box>
            //     <span>Titulo</span>
            //     <span>Album</span>
            // </Box>
            <div>
                {item}
                
            </div>
        )
    }
}