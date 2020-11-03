import React, { Componets } from 'react';
import styled from 'styled-components';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CardItem = ({city}) => {
    const MAX_STRING_LENGTH = 150;
    const Div = styled.div`
        background-color: ${PaletColors["crocodile tooth"]};
        border: 2px solid ${PaletColors["jackson purple"]};
        border-radius: 10px;
        box-shadow: 3px 3px 5px ${PaletColors["grey porcelain"]};
        height: 70vh;
        width: 25vw;
        margin-bottom: 5vh;
        overflow: hidden;
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
            box-shadow: 0px 0px 3px ${PaletColors["grey porcelain"]};
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
        font-size: 1.5rem;
        margin-bottom: 10px;
        height: 8vh;
        width: 100%;
    `;
    const H2 = styled.h2`
        color: ${PaletColors["lucky point"]};
        background-color: ${PaletColors["swan white"]};
        align-items: center;
        border-radius: 0 0 10px 10px;
        border-top: 1px solid ${PaletColors["grey porcelain"]};
        box-shadow: 0px -2px 4px ${PaletColors["grey porcelain"]};
        cursor: pointer;
        font-family: 'Markazi Text', serif;
        font-size: 1.3rem;
        height: 100vh;
        padding: 20px;
        margin-top: 10px;
    `;
    const IMG = styled.img`
        width: 100%;
    `;
    const styles ={
        width: "5px",
        height: "5px",
        backgroundColor: PaletColors["hot stone"],
        borderRadius: "50%",
        textAlign: "center",
        margin: "3px auto",
    }
    return (
        <Div>
            <H1>
                <DivHeart>
                    <FontAwesomeIcon icon={faHeart} style={{fontSize: "4vh", color: "red", transform: "translate(0, 40%)",}}/>
                </DivHeart>
                {city.name}
                <DivCircle>
                    <div style={styles}></div>
                    <div style={styles}></div>
                    <div style={styles}></div>
                </DivCircle>
            </H1>
            <IMG src={city.imag} ale={city.name}/>
            <H2>{`${city.description.substr(0, MAX_STRING_LENGTH)} ...`}</H2>
        </Div>
     );
}

export default CardItem;