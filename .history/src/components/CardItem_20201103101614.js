import React, { Componets } from 'react';
import styled from 'styled-components';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardItem = ({city}) => {
    const Div = styled.div`
    background-color: ${PaletColors["lucky point"]};
    width: 30vw;
    height: 30vh;
    border: 2px solid ${PaletColors["jackson purple"]};
    border-radius: 10px;
    `;
    return (
        <Div>
            <h1>city: {city.name}</h1>
            <img src={city.imag} ale={city.name}/>
            <h2>{city.description}</h2>
        </Div>
     );
}

export default CardItem;