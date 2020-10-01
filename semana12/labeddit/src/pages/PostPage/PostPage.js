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
    console.log('PostPage', props.postDetails)
    const {username, createdAt, title, text, commentsCount, votesCount} = props.postDetails
    return(
        <CardContainer>
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
                    <TextTitle>{title}</TextTitle>
                    <Text>{text}</Text>
                </CardText>
                <CardFooter>
                    {`${commentsCount} comentários`}
                </CardFooter>
            </CardContent>
        </CardContainer>
    )
}