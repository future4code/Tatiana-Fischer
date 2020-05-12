import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallCard-container">
            <img src={ props.imagem } />
            <h5>{ props.titulo }</h5>
            <p>{ props.texto }</p>
            
        </div>
    )
}

export default CardPequeno;