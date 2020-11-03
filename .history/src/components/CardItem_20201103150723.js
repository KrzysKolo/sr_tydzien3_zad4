import React, { Componets } from 'react';
import styled from 'styled-components';
import PaletColors from './../colors/PaletColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const CardItem = ({city}) => {
    const MAX_STRING_LENGTH = 150;
    const Div = styled.div`
        background-color: ${PaletColors["crocodile tooth"]};
        border: 2px solid ${PaletColors["jackson purple"]};
        border-radius: 10px;
        box-shadow: 3px 3px 5px ${PaletColors["grey porcelain"]};
        height: 80vh;
        width: 25vw;
        margin-bottom: 5vh;
        overflow: hidden;
    `;
    const DivCircle = styled.div`
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 6.5vh;
        width: 6.5vh;
        transition: easy .5s;
        &:hover {
            background-color: rgba(209, 204, 192, 0.8);
            box-shadow: 0px 0px 3px ${PaletColors["grey porcelain"]};
        }
    `;
    const DivLetter = styled.div`
        background-color: ${PaletColors["fluorescent red"]};
        border-radius: 50%;
        color: ${PaletColors["swan white"]};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        font-size: 1.4rem;
        height: 6.5vh;
        width: 6.5vh;
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
        border-top: 1px solid ${PaletColors["grey porcelain"]};
        box-shadow: 0px -2px 4px ${PaletColors["grey porcelain"]};
        font-family: 'Markazi Text', serif;
        font-size: 1.3rem;
        padding: 20px;
        margin-top: 10px;
    `;
    const FOOTER = styled.footer`
        color: ${PaletColors["lucky point"]};
        background-color: ${PaletColors["swan white"]};
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        font-family: 'Markazi Text', serif;
        font-size: 1.3rem;
        padding: 20px;
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
                <DivLetter>
                    K
                </DivLetter>
                {city.name}
                <DivCircle>
                    <div style={styles}></div>
                    <div style={styles}></div>
                    <div style={styles}></div>
                </DivCircle>
            </H1>
            <IMG src={city.imag} ale={city.name}/>
            <H2>{`${city.description.substr(0, MAX_STRING_LENGTH)} ...`}</H2>
            <FOOTER>
                <DivCircle>
                    <FontAwesomeIcon icon={faHeart} style={{transform: "translateX(55%)", textAlign: "center"}}/>
                </DivCircle>
                <DivCircle>
                    <FontAwesomeIcon icon={faShareAlt} style={{transform: "translateX(55%)", textAlign: "center"}}/>
                </DivCircle>
                <DivCircle>
                    <FontAwesomeIcon icon={faAngleDown} style={{transform: "translateX(55%)", textAlign: "center"}}/>
                </DivCircle>

            </FOOTER>
        </Div>
     );
}

export default CardItem;