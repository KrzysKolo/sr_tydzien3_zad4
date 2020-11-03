import React, { Componets } from 'react';
import styled from 'styled-components';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const CardItem = ({city}) => {
    const Div = styled.div`
    background-color: ${PaletColors["crocodile tooth"]};
    border: 2px solid ${PaletColors["jackson purple"]};
    border-radius: 10px;
    box-shadow: 3px 3px 5px ${PaletColors["grey porcelain"]};
    height: 70vh;
    width: 25vw;
    `;
    const H1 = styled.h1`
    background-color: ${PaletColors["swan white"]};
    border-bottom: 1px solid ${PaletColors["chilean fire"]};
    box-shadow: 0px 2px 4px ${PaletColors["chilean fire"]};
    border-radius: 10px 10px 0 0 ;
    color: ${PaletColors["lucky point"]};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-family: 'Cinzel Decorative', cursive;
    font-size: 1.2rem;
    height: 8vh;
    width: 100%;
    `;
    const styles ={
        width: "8vh",
        height: "8vh",
        backgroundColor: "red",
        borderRadius: "50%",
        textAlign: "center",
        heightLine: "8vh"
    }
    return (
        <Div>
            <H1><div style={styles}><FontAwesomeIcon icon={faHeart} style={{fontSize: "4vh"}}/></div>  {city.name}<div style={styles}></div></H1>
            <img src={city.imag} ale={city.name}/>
            <h2>{city.description}</h2>
        </Div>
     );
}

export default CardItem;