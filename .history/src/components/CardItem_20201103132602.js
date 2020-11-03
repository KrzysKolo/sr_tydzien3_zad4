import React, { Componets } from 'react';
import styled from 'styled-components';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CardItem = ({city}) => {
    const Div = styled.div`
        background-color: ${PaletColors["crocodile tooth"]};
        border: 2px solid ${PaletColors["jackson purple"]};
        border-radius: 10px;
        box-shadow: 3px 3px 5px ${PaletColors["grey porcelain"]};
        height: 70vh;
        width: 25vw;
    `;
    const DivHeart = styled.div`
        background-color: rgba(209, 204, 192, 0.4);
        border-radius: 50%;
        cursor: pointer;
        height: 7.3vh;
        text-align: center;
        width: 7.3vh;
        &:hover {
            background-color: rgba(209, 204, 192, 0.8);
            box-shadow: 1px 3px 3px ${PaletColors["grey porcelain"]};
        }
    `;
    const DivCircle = styled.div`
        background-color: rgba(209, 204, 192, 0.4);
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        height: 7.3vh;
        width: 7.3vh;
        &:hover {
            background-color: rgba(209, 204, 192, 0.8);
            box-shadow: 1px 3px 3px ${PaletColors["grey porcelain"]};
        }
    `;
    const H1 = styled.h1`
        background-color: ${PaletColors["swan white"]};
        border-bottom: 1px solid ${PaletColors["grey porcelain"]};
        box-shadow: 0px 2px 4px ${PaletColors["grey porcelain"]};
        border-radius: 10px 10px 0 0 ;
        color: ${PaletColors["lucky point"]};
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        font-family: 'Cinzel Decorative', cursive;
        font-size: 1.2rem;
        margin-bottom: 10%;
        height: 8vh;
        width: 100%;
    `;
    const styles ={
        width: "8px",
        height: "8px",
        backgroundColor: "red",
        borderRadius: "50%",
        textAlign: "center",
        margin: "2px 0 0 40%",



    }
    return (
        <Div>
            <H1><DivHeart><FontAwesomeIcon icon={faHeart} style={{fontSize: "5vh", color: "red", transform: "translate(0, 25%)",}}/></DivHeart>  {city.name}<DivCircle><div style={styles}></div>
            <div style={styles}></div>
            <div style={styles}></div></DivCircle></H1>
            <img src={city.imag} ale={city.name}/>
            <h2>{city.description}</h2>
        </Div>
     );
}

export default CardItem;