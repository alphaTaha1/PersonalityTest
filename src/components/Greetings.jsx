
import { useState } from "react"
import Card1 from "./Card1";

function Greetings({name})
{
    const [isVisible, setVisible] = useState(true)
    const [isFadeOut , setFadeOut] = useState(false)

    const  handleVisibility = () =>
    {
        setFadeOut(true);
        setTimeout(
            () =>
            {
                setVisible(false);
            }, 1500)
    
    
    }
if(isVisible)
{
    return  (
        <div id="Greetings" className= {`${isFadeOut ? 'Fade-out' : " "} `} >
            <p>
     <button onClick={handleVisibility}>
       <h1>X</h1>
     </button>

        Welcome, {name || "Guest"} <br /><br />    
     
        <b>
        Discover Your Personality Type! <br />
        </b>
Welcome to our interactive personality quiz, where your preferences shape your unique profile! Dive into a series of engaging questions designed to uncover your traits and tendencies. As you select your favorite options, our algorithm will analyze your choices and provide insights into your personality type. Whether you're curious about your strengths, challenges, or social interactions, our quiz offers a fun and informative way to learn more about yourself. Get started now and unlock the secrets of your personality!
     </p>
        </div>
       
    )
   

}
if(!isVisible)
    {
        return(
            <Card1 />
        )
    }
 return null
}


export default Greetings