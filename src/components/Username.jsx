import React,{useState} from "react"
import Card1 from "./Card1.jsx" 
import Description from "../description.jsx";
import Greetings from "./Greetings.jsx";


function Username()
{
  const [name,setName]= useState("");
  const [isLoggedIn,setLogin]= useState(false);

 const handlesubmit = (e) => {
    e.preventDefault();
    if(name.trim())
    {
        setLogin(true);
    }

 }
 const toggleLogin = () => {
setLogin(true);
 } 
 if(!isLoggedIn)
 {
    return(
        <><form onSubmit={handlesubmit} className="login">
            <h2>
                Enter your Name
            </h2>
            
           
            <input type="text" id="Name" placeholder="John, Ahmed etc" value={name} onChange={(e) => setName(e.target.value)} /> 
           
            <button>Submit</button>
            <button id="preferNotsayButton" onClick={toggleLogin}> Prefer not say </button></form>
           </>
    )
 }

 if(isLoggedIn)
 {
    return(
        <>
                <Greetings  name= {name} />
        </>

    )
 }
  
   
}
export default Username


