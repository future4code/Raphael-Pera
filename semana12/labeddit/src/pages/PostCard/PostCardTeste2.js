import React from 'react'
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

export const PostCardTeste2 = (props) => {
    return(
        <CardContainer>
            <CardSideBar>
                <SideBarUp>up</SideBarUp>
                <SideBarCount>{props.post.votesCount}</SideBarCount>
                <SideBarDown>down</SideBarDown>
            </CardSideBar>
            <CardContent onClick={props.onClick}>
                <CardHeader>
                    <HeaderMsg> Postado por </HeaderMsg>
                    <HeaderUserName> {`${props.post.username}`} </HeaderUserName>
                    <HeaderCreatedAt> {dateFormat(props.post.createdAt)} </HeaderCreatedAt>
                </CardHeader>
                <CardText>
                    <TextTitle>{props.post.title}</TextTitle>
                    <Text>{props.post.text}</Text>
                </CardText>
                <CardFooter>
                    {`${props.post.commentsCount} comentários`}
                </CardFooter>
            </CardContent>
        </CardContainer>
    )
}