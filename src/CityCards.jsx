import React from 'react';
import Card from './Card'; // Assuming you have a Card component
import { prepareRows } from './utils.';
function CityCards({ cities }) {
 const {rows,error} = prepareRows(cities,1);
  return (
     rows.forEach((row)=>{
      <div class="row">
         {row.map((city) => {<Card key={index} city={city} />})}
      </div>
     })
    );            
}

export default CityCards;