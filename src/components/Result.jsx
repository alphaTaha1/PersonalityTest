import Ooga from "./Ooga"
import App from "../App";
import { useState } from "react";
import Username from "./Username";
function Result({angerPerc, calmPerc,competitivePerc,introvertPerc,extrovertPerc})
{
    const [showMainMenu, setShowMainMenu] = useState(false);

   const returnToMainMenu =() =>
    {
       
        return(
            setShowMainMenu(true) // Set to true to display the main menu
        )
    }
    if(showMainMenu)
    {
        return(
           <Username />
        )
    }
    return (
        <div className="Result">
            <h2 id="heading">RESULTS</h2>
            <div className="resultLine">
                <span>Calm:</span>
                <span>{calmPerc}%</span>
            </div>
            <div className="resultLine">
                <span>Anger:</span>
                <span>{angerPerc}%</span>
            </div>
            <div className="resultLine">
                <span>Competitive:</span>
                <span>{competitivePerc}%</span>
            </div>
            <div className="resultLine">
                <span>Introvert:</span>
                <span>{introvertPerc}%</span>
            </div>
            <div className="resultLine">
                <span>Extrovert:</span>
                <span>{extrovertPerc}%</span>
            </div>
            <button id="againButton" onClick={returnToMainMenu}>Try again?</button>
        </div>
    );



}
export default Result