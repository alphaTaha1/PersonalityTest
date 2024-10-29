// import {useState,useContext} from "react"
// import { UserContext } from "./Username"
// import SaveInfo from "./SaveInfo";

// function Alert()
// {

//     const [name,setName]= useState("");
//     const [enteredName ,setEnteredName] = useState(false)
//     const handlesubmit = (e) => {
//         e.preventDefault();
//         if(name.trim())
//         {
//             setEnteredName(true);
//         }
       
    
//      }
//      if(enteredName)
//      {
//         return(
//             <SaveInfo />
//         )
//      }
// return(
// <form onSubmit={handlesubmit} className="alertCard">

//             <h2>
//                 You must enter your name in order to save results!
//             </h2>
//             <input type="text" id="Name" placeholder="John, Ahmed etc" value={name} onChange={(e) => setName(e.target.value)} /> 
//             <br /><button >Submit</button>

//         </form>
// )
// }
// export default Alert