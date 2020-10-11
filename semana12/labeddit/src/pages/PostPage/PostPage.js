import React, { useEffect, useState } from 'react'
import {
    CardContainer,
    CardSideBar,
    CardContent,
    CardHeader,
    CardText,
    CardFooter,
    HeaderMsg,
    HeaderUserName,
    HeaderCreatedAt,
    TextTitle,
    Text,
    SideBarUp,
    SideBarDown,
    SideBarCount
} from './styled'
import { dateFormat } from '../../hooks/TimeStamp'
import { useProtectPage } from '../../hooks/useProtectPage'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../constants/url'

export const PostPage = (props) => {
    useProtectPage()
    // console.log('PostPage', props.postDetails)
    const {username, createdAt, title, text, commentsCount, votesCount} = props.postDetails

    const defineWidth = () => {
        function updateSize() {
            const cardContentWidth = (document.getElementById('card-container').clientWidth - 70) + 'px'
            document.getElementById('text-container').style.width = cardContentWidth
            document.getElementById('title-container').style.width = cardContentWidth

        }
        window.addEventListener('resize', updateSize);
        updateSize()
    }

    useEffect(()=>{ defineWidth() },[])

    return(
        <CardContainer id={`card-container`}>
            <CardSideBar>
                <SideBarUp>up</SideBarUp>
                <SideBarCount>{votesCount}</SideBarCount>
                <SideBarDown>down</SideBarDown>
            </CardSideBar>
            <CardContent>
                <CardHeader>
                    <HeaderMsg> Postado por </HeaderMsg>
                    <HeaderUserName> {`${username}`} </HeaderUserName>
                    <HeaderCreatedAt> {dateFormat(createdAt)} </HeaderCreatedAt>
                </CardHeader>
                <CardText>
                    <TextTitle id={`title-container`}> {title} </TextTitle>
                    <Text id={`text-container`}> {text} </Text>
                </CardText>
                <CardFooter>
                    {`${commentsCount} comentários`}
                </CardFooter>
            </CardContent>
        </CardContainer>
    )
}