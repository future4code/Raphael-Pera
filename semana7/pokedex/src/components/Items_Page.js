import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Item_Card } from './Item_Card'



const Main = styled.main`
    box-sizing: border-box;
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-template-rows: 50px auto;
    gap: 15px;
    padding: 60px 0 30px 0;
    /* background-color: whitesmoke; */
`

const Header = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

const Select_btn = styled.select`
    margin: 0;
    padding: 0;
    outline-style:none;
    outline: none;
`

const HomeQtd = styled.p`
    margin: 0;
    padding: 0;
    font-size: calc(12px + 0.5vw);

`

const ItemBox = styled.div`
    box-sizing: border-box;
    padding: 0 10px 10px 10px;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start; */

    display: grid;
    grid-template-columns: 1fr;
    column-gap:10px;
    row-gap:40px;
    @media screen and (min-width:605px){grid-template-columns: repeat(2,1fr);}
    @media screen and (min-width:880px){grid-template-columns: repeat(3,1fr);}
    @media screen and (min-width:1145px){grid-template-columns: repeat(4,1fr);}
    @media screen and (min-width:1500px){grid-template-columns: repeat(5,1fr);}
`




export class Items_Page extends React.Component {
    state = {
        items:[],
        // itemImg:'',
        produtosHome: [],
        itemsCarrinho: [],
        itemID: 0,
    }

    componentDidMount(){
        this.getAllItens()
    }


    getAllItens=()=>{
        axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=12")
        .then((response) => {
            response.data.results.map((item)=>{
                return(
                    axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                    .then((response) => {
                        this.setState({items:[...this.state.items, {name: item.name, img: response.data.sprites.front_default,} ]})
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                )
            })
        })
        .catch((error) => {
          console.log(error);
        });
    }

    adicionarCarrinho = (id) => {
        alert(`Adicionar Carrinho (id: ${id})`)
    }

    ordenarItems=()=>{

    }

    render() {
        let itemsNova
        if(this.state.items.length > 0){
            itemsNova = this.state.items.map((item)=>{
                return(
                    <Item_Card
                        key={item.id}
                        item={item}
                        // itemId={item.id}
                        // itemImg={item.imgUrl}
                        // itemNome={item.name}
                        // itemPreco={item.price}
                        // cartAdicionar={()=>this.props.cartAdicionar(produto.id)}
                    ></Item_Card>
                )
            })
        }

        return(
            <Main>
                <Header>
                    {/* <HomeQtd>Produtos: {this.state.items.length}</HomeQtd>
                    <Select_btn onChange={this.ordenarItems} name={'ordenarProdutos'}>
                        <option value={'relevancia'}>Relevância</option>
                        <option value={'cresc'}>Preço: Crescente</option>
                        <option value={'decresc'}>Preço: Decrescente</option>
                    </Select_btn> */}
                </Header>
                <ItemBox>
                    {itemsNova}
                </ItemBox>
            </Main>
        )
    }
}