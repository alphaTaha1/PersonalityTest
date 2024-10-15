import { useState, useEffect } from "react"
import Result from "./Result";


let maxAnger = 7;
let maxCalm = 8;
let maxIntrovert = 5;
let maxExtrovert = 5;
let maxCompetitive = 3;

let angerPerc = 0;
let calmPerc = 0;
let extrovertPerc = 0;
let introvertPerc = 0;
let competitivePerc =0;
function Ooga()
{    
 const [anger, setAnger] = useState(0);
const [calm, setCalm] = useState(0);
const [introvert, setIntrovert] = useState(0);
const [extrovert, setExtrovert] = useState(0);
const [competitive, setCompetitive] = useState(0);
const [fade, isfade] = useState(false)   


const [angerPerc, setAngerPerc] = useState(0);
const [calmPerc, setCalmPerc] = useState(0);
const [introvertPerc, setIntrovertPerc] = useState(0);
const [extrovertPerc, setExtrovertPerc] = useState(0);
const [competitivePerc, setCompetitivePerc] = useState(0);




    const selectOptions = [
    {
        question : "which food do you perfer from the bellow given",
        options : ['Pizza', 'Burger' , 'Pasta', 'Fries'],
    },
    {
        question : "Which of the following hobby are you most interested in",
        options : ['Footbaall', 'Drawing' , 'Playing Video Games', 'Using Social Media'],
    },
   
    {
        question: "What is your preferred way to spend a weekend?",
        options: ['Relaxing at home', 'Exploring the outdoors', 'Socializing with friends', 'Engaging in a hobby'],
    },
    {
        question: "How do you usually make decisions?",
        options: ['By following my instincts', 'After careful analysis', 'By consulting others', 'Based on past experiences'],
    },
   
    {
        question: "How do you feel in social situations?",
        options: ['Energized and excited', 'Reserved and observant', 'Comfortable and engaged', 'Anxious and shy'],
    },
    {
        question: "What motivates you the most?",
        options: ['Achieving personal goals', 'Helping others', 'Gaining knowledge', 'Building strong relationships'],
    },
    {
        question: "Which of the following best describes your work style?",
        options: ['Independent and self-directed', 'Collaborative and team-oriented', 'Structured and organized', 'Flexible and adaptable'],
    },
    {
        question: "How do you handle stress?",
        options: ['Exercise and physical activity', 'Talking it out with friends', 'Meditation and mindfulness', 'Diving into work or projects'],
    },
    {
        question: "What type of movies do you enjoy the most?",
        options: ['Comedies and light-hearted films', 'Dramas and emotional stories', 'Action and adventure', 'Documentaries and true stories'],
    },
    {
        question: "How do you prefer to communicate with others?",
        options: ['Face-to-face', 'Through texts or messages', 'On calls', 'In group settings'],
    },
   
    
    ]
    
 
        const [currentQ, setCurrentQ] = useState(0);
        const {question, options} = selectOptions[currentQ]
        const [finshed, setFinished] = useState(false)
        const [selectedOption, setSelectedOption] = useState([])
        // handle next questions

        const handleNext = (options) => {

          
            const newAnswer = [...options]
            newAnswer[currentQ] = selectOptions
            setSelectedOption(newAnswer)

            if(currentQ<selectOptions.length-1)
                {
                    setCurrentQ(currentQ+1)
                }
                else
                    {
                    setFinished(true)
                    checkResult()
                }
        }
   

        // handle the choices


        const handleChoices = (option) => {

            
         

            switch(option) {
                // Anger-increasing options
                case "Pizza":
                case "By following my instincts":
                case "Energized and excited":
                case "Anxious and shy":
                case "Diving into work or projects":
                case "Independent and self-directed":
                case "Face-to-face":
                case "Football":
                    setAnger(anger => anger + 1);                  // Increases anger
                    setCalm(calm => calm - 1);                     // Decreases calm
                    setExtrovert(extrovert => extrovert + 1);      // Increases extrovert
                    setCompetitive(competitive => competitive + 1); // Increases competitive
                    break;
            
                // Calm-increasing options
                case "After careful analysis":
                case "Comfortable and engaged":
                case "Collaborative and team-oriented":
                case "Through texts or messages":
                case "Drawing":
                case "Relaxing at home":
                    setAnger(anger => anger - 1);                   // Decreases anger
                    setCalm(calm => calm + 1);                      // Increases calm
                    setIntrovert(introvert => introvert - 1);      // Decreases introvert
                    break;
            
                // Introvert options
                case "Reserved and observant":
                case "Anxious and shy":
                case "Through texts or messages":
                case "Engaging in a hobby":
                case "Playing Video Games":
                    setIntrovert(introvert => introvert + 1);      // Increases introvert
                    setExtrovert(extrovert => extrovert - 1);      // Decreases extrovert
                    break;
            
                // Extrovert options
                case "Energized and excited":
                case "Socializing with friends":
                case "Collaborative and team-oriented":
                case "Face-to-face":
                case "Exploring the outdoors":
                case "Talking it out with friends":               // Added to increase extrovert
                    setExtrovert(extrovert => extrovert + 1);      // Increases extrovert
                    setIntrovert(introvert => introvert - 1);      // Decreases introvert
                    setCompetitive(competitive => competitive + 1); // Increases competitive
                    break;
            
                // Countering competitiveness
                case "Playing Video Games":
                case "Relaxing at home":
                case "Engaging in a hobby":
                case "Drawing":
                    setCompetitive(competitive => competitive - 1); // Decreases competitive
                    break;
            
                default:
                    break;
            }
            
            
            
            

        };
 
        const checkResult = () => {
            setAngerPerc(Math.round((anger / maxAnger) * 100));         // Update anger percentage
            setCalmPerc(Math.round((calm / maxCalm) * 100));            // Update calm percentage
            setIntrovertPerc(Math.round((introvert / maxIntrovert) * 100)); // Update introvert percentage
            setExtrovertPerc(Math.round((extrovert / maxExtrovert) * 100)); // Update extrovert percentage
            setCompetitivePerc(Math.round((competitive / maxCompetitive) * 100)); // Update competitive percentage
        };
   
         useEffect(() => {
            console.log("anger:", anger, "calm:", calm, "extrovert:", extrovert, "introvert:", introvert, "competitive:", competitive);
        }, [anger, calm, extrovert, introvert, competitive]); 
       
        


    return(

        <>
        {
            finshed? (
                <Result 
                angerPerc={angerPerc} 
                calmPerc={calmPerc} 
                introvertPerc={introvertPerc} 
                extrovertPerc={extrovertPerc} 
                competitivePerc={competitivePerc} 
            />
            )
            :
            <div className= {`mainGame ${isfade? "fade-out" : " "}`} >
            <div className="questions">
            <h1 className="questionCounter">{currentQ+1}/{selectOptions.length}</h1>

            <div className="actualQuestion">
            <h2>{question}</h2>
            </div>
            

            <div id="oogaline"></div>
                <div>
                    
                    {options.map((option, index,newAnswer) => (
                    <button id="gameButton" key= {index} onClick= {
                        () => {
                            
                        handleNext(option)
                        

                            handleChoices(option)
                            console.log("anger : " ,anger , "calm : " , calm , "extrovert : ", extrovert , "introvert : ", introvert , "competitive", competitive)
                
                            
                        }
                    }>
                        {option} <br />
                        </button> 
                         ))}
                </div>

                
                
            </div>
           

              
        </div>
        
        }
        
    
        </>
       
    )
   
 
}
export default Ooga