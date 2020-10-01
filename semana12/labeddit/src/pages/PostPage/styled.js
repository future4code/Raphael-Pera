import styled from 'styled-components'

export const CardContainer = styled.div`
    background-color: whitesmoke;
    border: 1px solid lightgray;
    border-radius: 5px;
    /* width: 300px; */
    width: 100%;
    /* height: auto; */
    text-align: left;
    margin: 10px;
    
    display: grid;
    grid-template-columns: 50px 1fr;
`
//CardSideBar and sons styles
    export const CardSideBar = styled.div`
        background-color: rgb(235,235,235);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        padding: 10px 0;
        border-radius: 5px 0 0 5px;
        z-index: 3;
    `

    export const SideBarUp = styled.span`
        margin: 3px 0;
        padding: 3px 0;
        cursor: pointer;
        :hover{background-color: rgb(225,225,225);}
        /* text-align: center; */
        display: grid;
        place-items: center;
    `

    export const SideBarCount = styled.span`
        display: grid;
        place-items: center;
    `

    export const SideBarDown = styled.span`
        margin: 3px 0;
        padding: 3px 0;
        cursor: pointer;
        :hover{background-color: rgb(225,225,225);}
        /* text-align: center; */
        display: grid;
        place-items: center;
    `

//--------------

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    /* padding: 10px; */
    cursor: pointer;
`

//CardHeader and sons styles
    export const CardHeader = styled.div`
        background-color: whitesmoke;
        box-shadow: 0 3px 5px rgb(235,235,235);
        padding: 10px;
        border-radius: 0 5px 0 0;
        z-index:2;
    `

    export const HeaderMsg = styled.span`
        font-size: 14px;
        color: rgb(60,60,60);
    `

    export const HeaderUserName = styled.h4`
        display:inline;
        /* margin-right: 15px; */
    `

    export const HeaderCreatedAt = styled.span`
        font-size: 14px;
        color: rgb(60,60,60);
    `
//--------------


//CardText and sons styles
    export const CardText = styled.div`
        background-color: rgb(249,249,249);
        padding: 10px;
        /* max-height: 200px;
        overflow: auto; */
    `

    export const TextTitle = styled.h3`
        margin:0;
    `

    export const Text = styled.p``
//--------------


//CardFooter and sons styles
    export const CardFooter = styled.div`
        padding: 10px;
        box-shadow: 0 -10px 6px rgb(245,245,245);
        font-size: 14px;
        /* font-weight: bold; */
        color: rgb(100,100,100);
        border-radius: 0 0 5px 0;
        border-top: 1px solid rgb(245,245,245);
    `
//--------------

export const Item = styled.p`
    margin: 3px 0;
`

export const ItemBold = styled.span`
    font-weight: bold;
    margin-right: 5px;
`