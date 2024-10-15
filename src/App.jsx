
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header.jsx"
import Ooga from "./components/Ooga.jsx";
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
