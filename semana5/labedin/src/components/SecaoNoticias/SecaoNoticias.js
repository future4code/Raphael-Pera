import React from 'react'
import './SecaoNoticias.css'

function SecaoNoticias(props) {
    return (
        <div className = "secao-noticias">
            <h3>{ props.titulo }</h3>
            <a href="">{ props.item1 }</a>
            <a href="">{ props.item2 }</a>
            <a href="">{ props.item3 }</a>
        </div>
    )
}

export default SecaoNoticias