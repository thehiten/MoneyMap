import React from 'react';
import './Card.css';

const Card= (props)=>{

    const classes = 'card ' + props.className;

  // children have all content that are inside the compontnet 
  return(<div className = {classes}>
               {props.children}    
         </div>
  );

}
export default Card;