import React from 'react';
import Carditem from './CardItem';
import styled from 'styled-components';
import data from "./../data";
const Cards = () => {
  const Div=styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 85%;
    margin: 8vh auto;
  `;
    return (
        <div>
           <Div>
               {data.map( (item) =>  <Carditem key={item.id} city={item}/>)}
           </Div>
        </div>
     );
}

export default Cards;