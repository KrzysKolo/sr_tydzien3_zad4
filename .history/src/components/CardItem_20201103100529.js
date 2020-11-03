import React, { Componets } from 'react';
import styled from 'styled-components';
import PaletColors from './../colors/PaletColors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardItem = ({city}) => {
    return (
        <div>
            <h1>city: {city.name}</h1>
            <img src={city.imag} ale={city.name}/>
            <h2>{city.description}</h2>
        </div>
     );
}

export default CardItem;