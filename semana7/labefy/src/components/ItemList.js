import React from 'react'
import styled from 'styled-components'
import { ItemLine } from './ItemLine'

const Box = styled.div`
    background-color: rgb(70,70,70);
    color: white;
    padding: 0 20px 20px 20px;
`
const Header = styled.div`
    border-bottom: 1px solid rgb(120,120,120);
    color: rgb(220,220,220);
    margin: 20px 0;
    padding: 10px;
    display:grid;
    grid-template: 30px / repeat(2, 1fr);
    column-gap: 20px;
    justify-content: start;
    text-align:left;

    > span{background-color:green;}
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
                header=<Header><span>NOME</span></Header>
                lista = this.props.items.map((item)=>{
                    console.log(item.id)
                    return <ItemLine key={item.id} conteudo={{col1: item.name, col2: 'teste'}} />
                })
                break;
            case 'track':
                header=<Header><span>TÍTULO</span><span>ALBUM</span></Header>
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