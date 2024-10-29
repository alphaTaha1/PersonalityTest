import { useState,useContext } from "react";
import Result from "./Result";
import Username, { GuestContext } from "./Username";
import { UserContext} from "./Username";
function SaveInfo({infoSaved,angerPerc, calmPerc,competitivePerc,introvertPerc,extrovertPerc}) {

    const {name} = useContext(UserContext)
    const {isGuest} = useContext(GuestContext)
   
    const [returnResult, setReturnResult] = useState(false)
const [mainMenu,setMainMenu] = useState(false)
   const returnToMainMenu =() =>
    {
        setMainMenu(true)
    }
const returnToResults = () =>
{
setReturnResult(true)
}
if(returnResult)
{
    return(
        <Result 
        angerPerc={angerPerc} 
        calmPerc={calmPerc} 
        competitivePerc={competitivePerc} 
        introvertPerc={introvertPerc} 
        extrovertPerc={extrovertPerc} 
    />
    )
}
    if(mainMenu)
    {
        return(
            <Username />
        )
    }


    if(infoSaved && !isGuest){
        return(
<div className="container">
    <button className="crossInReturnToMainButton" onClick={returnToResults}>X</button>
<button id="cardInSaveInfo"><h2><span>Name</span> : {name} </h2>
    <h1>Saved personality results!</h1>
</button>
<button className="returnToMainButton1" onClick={returnToMainMenu}>Return to main menu</button>
    </div>)
    }
else{
return(

    <>
      <div className="emptyContainer">
        <h1>You must enter your name first in order to <span>save</span> results!</h1>
    </div>
    <button className="returnToMainButton2" onClick={returnToMainMenu}>Return to main menu</button>
    
    </>
  
    
)
}

}
export default SaveInfo;