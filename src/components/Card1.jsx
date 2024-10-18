import { useState } from "react";
import Ooga from "./Ooga";

function Card1()
{
  const openOoga = () =>
    {
  
        setOpenOoga(true)

   handleVisibility()
   }
const [cardActive, isCardActive] = useState(true)
const [fadeOut, isFadeOut] = useState(false)
const [ooga, setOpenOoga] = useState(false)
    const handleVisibility = () =>
    {
      isFadeOut(true)
      setTimeout(
        ()=>
        {
          isCardActive(false)
        }
        ,200
      )
     
    }
  
    // onClick={handleVisibility} 
    //       className={`card ${fadeOut ? 'Fade-out' : ''}`} 

       if(cardActive)
       {
        return(
          <div className="card">
            <h1>Select any of the following to continue playing</h1>
            <button onClick={openOoga} className="button1">Personality Tests</button>
            <button className="button2">IQ Test</button>
            <button className="button3">More coming soon</button>


        </div>  
        );
       

       }
       console.log("HI")
       
       if(ooga)
       { 
        console.log("worked")
        return(
        <Ooga />
      )
        
       }
    
   return null
}
export default Card1;
