import React from 'react';
import styled from 'styled-components'


const ItemBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4px;
    border-radius: 10px;
    /* border: 1px solid rgb(240,240,240); */
    /* box-shadow: 0 2px 2px rgb(200,200,200); */
    transition: 0.3s;
    /* background-color: rgb(250,250,250); */

    :hover{
        /* border: 1px solid rgb(240,240,240); */
        box-shadow: 0px 3px 4px rgb(180,180,180);
    }
`

const ItemImg = styled.img`
    box-sizing: border-box;
    width: 100%;
    background-color: rgb(245,245,245);
    border-radius:10px;
`

const ItemNome = styled.p`
    box-sizing: border-box;
    align-self: center;
    margin: 25px 0 15px 0;
    font-size: 24px;
    font-weight: bold;
    color: rgb(30,30,30)
`

const ItemPreco = styled.p`
    box-sizing: border-box;
    align-self: flex-start;
    margin: 10px 0 20px 0 ;
`

const ItemBtn = styled.button`
    box-sizing: border-box;
    outline: none;
    border: 2px solid rgb(10,10,10);
    background-color: rgb(10,10,10);
    color: white;
    padding: 8px;
    width: 100%;
    font-size: 1rem;
    transition: 0.3s;
    cursor: pointer;

    :hover{
        background-color: rgb(250,250,250);
        color: rgb(10,10,10);
    }

`


export class Item_Card extends React.Component {
    render(){
        const itemPreco = `R$ ${Number(this.props.itemPreco).toFixed(2)}`
        return(
            <ItemBox>
                <ItemImg src={this.props.item.img}></ItemImg>
                <ItemNome>{this.props.item.name}</ItemNome>
                {/* <ItemPreco>{itemPreco}</ItemPreco> */}
                {/* <ItemBtn onClick={this.props.cartAdicionar}>
                    Adicionar ao Carrinho
                </ItemBtn> */}
            </ItemBox>
        )
    }
}



