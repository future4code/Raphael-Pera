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

export const PostCardTeste3 = (props) => {
    return(
        <CardContainer>
            <CardSideBar>
                <SideBarUp>up</SideBarUp>
                <SideBarCount>125</SideBarCount>
                <SideBarDown>down</SideBarDown>
            </CardSideBar>
            <CardContent>
                <CardHeader>
                    <HeaderMsg>Postado por </HeaderMsg>
                    <HeaderUserName>Bananinha com açai</HeaderUserName>
                    <HeaderCreatedAt> {dateFormat(1601408616670)} </HeaderCreatedAt>
                </CardHeader>
                <CardText>
                    <TextTitle>Esse é o título</TextTitle>
                    <Text>
                        sdssd asdfasdfasdf sadfas df asdf a sdfasdf asdf asdf asdf  a sdf asdf as df
                        asdfsadf asdfasdf asdfasdf dsfasdff wer wet wertwertwe rt we rt wertwertwe
                        wertwertwert wertwert ewrt.
                        sdssd asdfasdfasdf sadfas df asdf a sdfasdf asdf asdf asdf  a sdf asdf as df
                        asdfsadf asdfasdf asdfasdf dsfasdff wer wet wertwertwe rt we rt wertwertwe
                        wertwertwert wertwert ewrt.
                        sdssd asdfasdfasdf sadfas df asdf a sdfasdf asdf asdf asdf  a sdf asdf as df
                        asdfsadf asdfasdf asdfasdf dsfasdff wer wet wertwertwe rt we rt wertwertwe
                        wertwertwert wertwert ewrt.
                        sdssd asdfasdfasdf sadfas df asdf a sdfasdf asdf asdf asdf  a sdf asdf as df
                        asdfsadf asdfasdf asdfasdf dsfasdff wer wet wertwertwe rt we rt wertwertwe
                        wertwertwert wertwert ewrt.
                        sdssd asdfasdfasdf sadfas df asdf a sdfasdf asdf asdf asdf  a sdf asdf as df
                        asdfsadf asdfasdf asdfasdf dsfasdff wer wet wertwertwe rt we rt wertwertwe
                        wertwertwert wertwert ewrt.
                    </Text>
                </CardText>
                <CardFooter>59 comentários</CardFooter>
            </CardContent>
        </CardContainer>
    )
}