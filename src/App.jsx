
import { useState } from "react"
import Header from "./components/Header.jsx"
import Username from "./components/Username.jsx"
import { userContext ,guestContext} from "./components/context.js"

function App() {
    const [isGuest, setIsGuest] = useState(false)
const [username, setUsername] = useState("")
    
            return(
                <userContext.Provider value = {{username,setUsername}}>
                    <guestContext.Provider value = {{isGuest, setIsGuest}}>
                    <Header />
                    <Username />       
                 </guestContext.Provider>
          
                </userContext.Provider>
       
            )
}
export default App
