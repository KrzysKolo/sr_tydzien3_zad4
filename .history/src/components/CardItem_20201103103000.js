import React, { Componets } from 'react';
import styled from 'styled-components';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardItem = ({city}) => {
    const Div = styled.div`
    background-color: ${PaletColors["crocodile tooth"]};
    border: 2px solid ${PaletColors["jackson purple"]};
    border-radius: 10px;
    box-shadow: 3px 3px 5px ${PaletColors["grey porcelain"];
    height: 80vh;
    margin: 10px auto;
    padding: 15px;
    width: 30vw;
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