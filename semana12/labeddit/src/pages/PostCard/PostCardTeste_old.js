import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    background-color: whitesmoke;
    border: 1px solid black;
    /* width: 300px; */
    width: 100%;
    /* height: auto; */
    text-align: left;
    margin: 10px;
    padding: 10px;
`

const Item = styled.p``

const ItemBold = styled.span`
    font-weight: bold;
    margin-right: 5px;
`


export const PostCardTeste = (props) => {
    return(
        <CardContainer>
            <Item> <ItemBold>commentCount:</ItemBold> {props.post.commentCount}</Item>
            <Item> <ItemBold>createdAt:</ItemBold> {props.post.createdAt}</Item>
            <Item> <ItemBold>id:</ItemBold> {props.post.id}</Item>
            <Item> <ItemBold>text:</ItemBold> {props.post.text}</Item>
            <Item> <ItemBold>title:</ItemBold> {props.post.title}</Item>
            <Item> <ItemBold>userVoteDirection:</ItemBold> {props.post.userVoteDirection}</Item>
            <Item> <ItemBold>username:</ItemBold> {props.post.username}</Item>
            <Item> <ItemBold>votesCount:</ItemBold> {props.post.votesCount}</Item>
        </CardContainer>
    )
}