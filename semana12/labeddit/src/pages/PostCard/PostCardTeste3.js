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
    SideBarCount,
    IconContainer,
} from './styled'
import { dateFormat } from '../../hooks/TimeStamp'



export const PostCardTeste3 = (props) => {
    const idNum = props.idNum

    const defineWidth = () => {
        function updateSize() {
            const cardContentWidth = (document.getElementById(`card-container-${idNum}`).clientWidth - 82) + 'px'
            document.getElementById(`text-container-${idNum}`).style.width = cardContentWidth
            document.getElementById(`title-container-${idNum}`).style.width = cardContentWidth
        }
        window.addEventListener('resize', updateSize);
        updateSize()
    }

    useEffect(()=>{ defineWidth() },[props])

    return(
        <CardContainer id={`card-container-${idNum}`}>
            <CardSideBar>
                <IconContainer> <SideBarUp style={{ fontSize: 26 }} /*fontSize='large'*/ /> </IconContainer>
                <SideBarCount>125</SideBarCount>
                <IconContainer> <SideBarDown style={{ fontSize: 26 }} /> </IconContainer>
            </CardSideBar>
            <CardContent>
                <CardHeader>
                    <HeaderMsg>Postado por </HeaderMsg>
                    <HeaderUserName>Bananinha com açai </HeaderUserName>
                    <HeaderCreatedAt> {dateFormat(1601408616670)} {` (id: ${idNum})`}</HeaderCreatedAt>
                </CardHeader>
                <CardText>
                    <TextTitle id={`text-container-${idNum}`}>Esse é o título sçldkjaçsldkfjlçaskdjflçaskdjfçlaskdjfçlaskdjfçlaskdfjçlaskdjfçlaskdjfçlaskdjfçasçldkfjsaçdlkfjsaçldkfjsaçlkdfjsadfjlçaskjdf</TextTitle>
                    <Text id={`title-container-${idNum}`}>
                        sçldkjaçsldkfjlçaskdjflçaskdjfçlaskdjfçlaskdjfçlaskdfjçlaskdjfçlaskdjfçlaskdjfçasçldkfjsaçdlkfjsaçldkfjsaçlkdfjsadfjlçaskjdf laskdjfçalskdjfçlaskdjfçlaskdjfçlaksjdfçlaskjdfçlaskdjfçalskdjfçaslkdjfçlkasdfçlsakjdfçlsakdjfçlsakdjfçlsakdfjçlaskdjsaldçkfj
                    </Text>
                </CardText>
                <CardFooter>59 comentários</CardFooter>
            </CardContent>
        </CardContainer>
    )
}