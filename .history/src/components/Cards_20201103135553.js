import React from 'react';
import Carditem from './CardItem';
import styled from 'styled-components';
const data = [
    {
      id: 0,
      name: "Paryż",
      description: "Paryż to stolica i największe miasto Francji, położone w centrum Basenu Paryskiego, nad Sekwaną. Miasto stanowi centrum polityczne, ekonomiczne i kulturalne kraju. W granicach administracyjnych Paryża zamieszkują ponad 2 mln osób, w tzw. Wielkim Paryżu ok. 10 mln, a w całym zespole miejskim ponad 12 mln.",
      imag: "../images/paryz.jpg",
    },
    {
      id: 1,
      name: "Dubrownik",
      description: "Dubrownik to miasto w Chorwacji, stolica żupanii dubrownicko-neretwiańskiej, siedziba Miasta Dubrownik. Jest położone w południowej Dalmacji nad Morzem Adriatyckim. Niegdyś ośrodek handlu rangi europejskiej, obecnie przede wszystkim ośrodek turystyki. Port handlowy i pasażerski. W 2011 roku liczyło 28 434 mieszkańców.",
      imag: "../images/dubrownik.jpg"
    },
    {
      id: 2,
      name: "Rzym",
      description: "Rzym to stolica i największe miasto Włoch, położone w środkowej części kraju nad rzeką Tyber i Morzem Śródziemnym. Centrum administracyjne ma powierzchnię 1287 km² i liczbę ludności 2 868 104, będąc trzecim co do wielkości miastem Unii Europejskiej. Miasto Stołeczne Rzym ma 4 331 856 mieszkańców.",
      imag: "../images/rzym.jpg"
    },
    {
      id: 3,
      name: "Kraków",
      description: "Kraków – miasto na prawach powiatu położone w południowej Polsce nad Wisłą, drugie co do liczby mieszkańców i powierzchni miasto kraju, formalna stolica Polski do 1795 r. i miasto koronacyjne oraz nekropolia królów Polski, od 1000 r. nieprzerwanie stolica diecezji krakowskiej, a od 1925 archidiecezji i metropolii.",
      imag: "../images/krakow.jpg"
    },
    {
      id: 4,
      name: "Toruń",
      description: "Kraków – miasto na prawach powiatu położone w południowej Polsce nad Wisłą, drugie co do liczby mieszkańców i powierzchni miasto kraju, formalna stolica Polski do 1795 r. i miasto koronacyjne oraz nekropolia królów Polski, od 1000 r. nieprzerwanie stolica diecezji krakowskiej, a od 1925 archidiecezji i metropolii.",
      imag: "../images/torun.jpg"
    },
    {
      id: 5,
      name: "Ateny",
      description: "Ateny to stolica i największe miasto Grecji, jeden z najważniejszych ośrodków turystycznych Europy z zabytkami kultury antycznej i zarazem dziesiąty co do wielkości zespół miejski w Unii Europejskiej na poziomie 3,5 mln mieszkańców.",
      imag: "../images/ateny.jpg"
    },
  ]


const Cards = () => {
  const Div=styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 85%;
    margin: 0 auto;
  `;
    return (
        <div>
            Card
           <Div>
               {data.map( (item) =>  <Carditem key={item.id} city={item}/>)}
           </Div>
        </div>
     );
}

export default Cards;