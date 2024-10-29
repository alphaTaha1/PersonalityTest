import React,{useState, useContext, createContext} from "react"

import Greetings from "./Greetings.jsx";

export const UserContext = createContext() 
export const GuestContext = createContext()
function Username()
{
  const [name,setName]= useState("");
  const [isLoggedIn,setLogin]= useState(false);
  const [isAlert , setIsALert] = useState(false)
  const [isGuest , setIsGuest] = useState(false)
 const handlesubmit = (e) => {
    e.preventDefault();
    if(name.trim())
    {
        setLogin(true);
    }
    else{
        setIsALert(true);
    }

 }
 const toggleLogin = () => {
setLogin(true);
setIsGuest(true)
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
            <h1 className= { `alert ${isAlert? "setAlert" : ""}`} >Enter name first!</h1>
            <button id="preferNotsayButton" onClick={toggleLogin}> Prefer not say </button>
       

            </form>
           </>
    )
 }

 if(isLoggedIn)
 {
    return(
        <GuestContext.Provider value = {{isGuest}}>
  <UserContext.Provider value = {{name}}>
          <Greetings  name= {name} isGuest ={isGuest}/>
        </UserContext.Provider>
        </GuestContext.Provider>
      
              
    )
 }
  
   
}
export default Username


