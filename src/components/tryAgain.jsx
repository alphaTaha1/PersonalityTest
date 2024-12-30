import { useState } from "react"
import Ooga from "./Ooga"
import Username from "./Username"
import Result from "./Result"

function TryAgain({userData})
{
    const [sameName , setSameName] = useState(false)
    const [diffName , setDiffName] = useState(false)
    const [Cross , setHandleCross ] = useState(false)


const same = () =>{
    setSameName(true)
}
const diff = () =>{
    setDiffName(true)
    
}
const handleCross = () =>
    {
        setHandleCross(true)
    }

    
if(sameName){
    return(
        <Ooga />
    )
}
else if(diffName)
{
    return(
        <Username />
    )
}
else if(Cross){
    return(
        <Result 
        angerPerc={userData.angerPerc}
        calmPerc={userData.calmPerc}
        competitivePerc={userData.competitivePerc}
        introvertPerc={userData.introvertPerc}
        extrovertPerc={userData.extrovertPerc}
    />
    )
}



    return(
        <div className="tryAgain">
            <button className="tryAgainCrossButton" onClick={handleCross}>X</button>
            <button className="tryAgainButtons" onClick={same}>Try again with the same name?</button>
            <button className="tryAgainButtons" onClick={diff}>Try again with a different name?</button>

        </div>
    )
}

export default TryAgain