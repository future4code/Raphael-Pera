import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    /* flex-direction: column;
    align-items: center;
    justify-content: flex-start; */
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    /* padding: 0 10px; */
    padding: 10px 10px 10px 10px;
    margin: 5px 5px 10px 5px;
    background-color: rgb(85,85,85);
`

const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding: 8px 3px;
    margin: 7px 0;
`

const Btn = styled.button`
    border: none;
    background-color: rgb(107, 218, 107);
    color: white;
    width: auto;
    margin: 7px 0;
    padding: 6px 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`


export class AddTrackForm extends React.Component{
    state={
        inputName:'',
        inputArtist:'',
        inputURL:'',
        addTrack:'',
    }

    onChangeInput=(event)=>{
        this.setState({[event.target.name]: event.target.value})
        // console.log(event.target.name, event.target.value)
    }

    onKey=(event)=>{event.key==='Enter' && this.addTrack()}

    addTrack=()=>{
        let inputName = this.state.inputName
        let inputArtist = this.state.inputArtist
        let inputURL = this.state.inputURL
        if (inputName!=='' && inputArtist!=='' && inputURL!==''){
            // this.setState(
            //     {addTrack:
            //         {
            //             PLID:this.props.playlist.id,
            //             name: inputName,
            //             artist: inputArtist,
            //             url: inputURL,
            //         }
            // })
            let track =
                {
                    PLID:this.props.playlist.id,
                    PLname:this.props.playlist.name,
                    name: inputName,
                    artist: inputArtist,
                    url: inputURL,
                }
            this.props.addTrack(track)
            this.props.addTrackForm()
        }
    }

    render(){
        // console.log(this.state.addTrack)
        return(
            <div>
                <Box onKeyDown={this.onKey}>
                    {/* ADD TRACK FORM !!! */}
                    <Input
                        name={'inputName'}
                        value={this.state.inputName}
                        placeholder={'Nome da música'}
                        onChange={this.onChangeInput}
                    />

                    <Input
                        name={'inputArtist'}
                        value={this.state.inputArtist}
                        placeholder={'Nome do Artista'}
                        onChange={this.onChangeInput}
                    />

                    <Input
                        name={'inputURL'}
                        value={this.state.inputURL}
                        placeholder={'URL da música'}
                        onChange={this.onChangeInput}
                    />
                    <Btn onClick={this.addTrack} >Adicionar</Btn>
                </Box>
            </div>
        )
    }
}
