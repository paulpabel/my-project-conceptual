/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectActors, remaining, totalSpend }) => {
   
   

    return (
       
    <div className="text-3xl text-white font-bold mr-4 w-1/3">
          
        <h2>TotalActor:{selectActors.length}</h2>
        <p>selectedLists here:</p>
        {
            selectActors.map(actor=>(
                <li key={actor.id} className='my-4'>{actor.name}</li>
            ))
        }
<br />
        <p>totalCost:{totalSpend}</p>
        <br />

        <p>remaining:{remaining}</p>
        <br />

      
        
    </div>
            
     
    );
};

export default Cart;