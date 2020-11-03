import React, { Componets } from 'react';
import styled from 'styled-components';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardItem = ({city}) => {
    const Div = styled.div`
    background-color: ${PaletColors["crocodile tooth"]};
    border: 2px solid ${PaletColors["jackson purple"]};
    border-radius: 10px;
    box-shadow: 3px 3px 5px ${PaletColors["grey porcelain"]};
    height: 70vh;
    padding: 15px;
    width: 25vw;
    `;
    const H1 = styled.h1`
    color: ${PaletColors["lucky point"]};
    font-family: 'Cinzel Decorative', cursive;
    font-size: 1.2rem;
    `;
    return (
        <Div>
            <H1>city: {city.name}</H1>
            <img src={city.imag} ale={city.name}/>
            <h2>{city.description}</h2>
        </Div>
     );
}

export default CardItem;