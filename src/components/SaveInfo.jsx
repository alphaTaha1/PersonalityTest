import { useState,useContext } from "react";
import Result from "./Result";
import { userContext ,guestContext} from "./context";
import SavedResults from "./SavedResults";
import Username from "./Username";

function SaveInfo({infoSaved,userData}) {

    const {username} = useContext(userContext)
    const {isGuest} = useContext(guestContext)
   
    const [returnResult, setReturnResult] = useState(false)
    const [returnToSavedResults, setReturnToSavedResults] = useState(false)
const [mainMenu,setMainMenu] = useState(false)

// function to return to main menu
   const returnToMainMenu =() =>
    {
        setMainMenu(true)
    }
    // function to return to results
const returnToResults = () =>
{
setReturnResult(true)
}

// function to open saved results
const openSavedResults =()=>
    {
        setReturnToSavedResults(true)
    } 


if(returnToSavedResults)
{
    return(
        <SavedResults />
    )
}

if(returnResult)
{
    return(
        <Result 
     userData = {userData}
    savedInfo = {infoSaved}
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
<button onClick={openSavedResults} id="cardInSaveInfo"><h2><span>Name</span> : {username} </h2>
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