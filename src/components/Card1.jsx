import { useState } from "react";
import Ooga from "./Ooga";
function Card1()
{

const [cardActive, isCardActive] = useState(true)
const [fadeOut, isFadeOut] = useState(false)

   const handleVisibility = () =>
    {
      isFadeOut(true)
      setTimeout(
        ()=>
        {
          isCardActive(false)
        }
        ,1500
      )
     
    }

       if(cardActive)
       {
        return(
          <div onClick={handleVisibility} 
          className={`card ${fadeOut ? 'Fade-out' : ''}`} >
          <button className="cardText"> START </button>
          <div id="line"></div>
          <p>Press this button to start</p>
        </div>  
        );
       }
       if(fadeOut)
        {
         return(
          <Ooga />
         )
        }
   return null
}
export default Card1;
