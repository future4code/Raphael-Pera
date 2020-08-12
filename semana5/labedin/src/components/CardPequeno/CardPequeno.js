import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="card-pequeno">
            <img src={ props.icone }/>
            <p><span>{ props.tipo }: </span>{props.texto}</p>
        </div>
    )
}

export default CardPequeno;
