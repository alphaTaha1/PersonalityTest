
import { useState ,useContext} from "react";
import TryAgain from "./tryAgain";
import SaveInfo from "./SaveInfo";
import { UserContext } from "./Username"; 

function Result({angerPerc, calmPerc,competitivePerc,introvertPerc,extrovertPerc})
{
    const { isGuest } = useContext(UserContext);
    const [showMainMenu, setShowMainMenu] = useState(false);
    const [infoSaved ,setInfoSaved] = useState(false)
    const returnToSaveInfo = () =>
    {
        return(
            setInfoSaved(true)
            
        )
    }
   const returnToMainMenu =() =>
    {
       
        return(
            setShowMainMenu(true) // Set to true to display the main menu
        )
    }
    if(showMainMenu)
    {
        return(
            <TryAgain
            angerPerc={angerPerc} 
            calmPerc={calmPerc} 
            competitivePerc={competitivePerc} 
            introvertPerc={introvertPerc} 
            extrovertPerc={extrovertPerc} 
        />
        )
    }
    if(infoSaved && !isGuest)
    {return(
        <SaveInfo  infoSaved={true}
        angerPerc={angerPerc} 
        calmPerc={calmPerc} 
        competitivePerc={competitivePerc} 
        introvertPerc={introvertPerc} 
        extrovertPerc={extrovertPerc} 
    
        />

    )
    }
    if(isGuest)
    {
        return(
            <>
            <Result />
           
            </>
            
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
            
            <button className="resultButtons" onClick={returnToSaveInfo} >Save Info </button>
            <button className="resultButtons" onClick={returnToMainMenu}>Try again</button>
        
        </div>
    );



}
export default Result