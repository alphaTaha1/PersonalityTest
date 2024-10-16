
import Header from "./components/Header.jsx"

import { useState } from "react";

import Username from "./components/Username.jsx"

function App() {
 
   const [finishedOnce, setFinishedOnce] = useState(false)
        
        if(!finishedOnce)
        {
            return(
            <>
            <Header />
           <Username />
          
           </>
            );
        }
        else{
            return(
                <Username />
            )
        }
           
         
       
    
   
    
 
}

export default App
