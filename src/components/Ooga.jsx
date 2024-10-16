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

            
            switch (option) {
                // Anger-increasing options
                case "Pizza":
                    setAnger(anger => anger + 1);                  // Increases anger
                    setCalm(calm => calm - 1);                     // Decreases calm
                         // Increases extrovert
                    setCompetitive(competitive => competitive + 1); // Increases competitive
                    break;
            
                case "Burger":
                    setAnger(anger => anger + 1);                  // Increases anger
                    setCalm(calm => calm - 1);                     // Decreases calm
                    break;
            
                case "Pasta":
                    setCalm(calm => calm + 1);                      // Increases calm
                    break;
            
                case "Fries":
                    setCompetitive(competitive => competitive + 1); // Increases competitive
                    break;
            
                // Hobby options
                case "Football":
                    setAnger(anger => anger + 1);                   // Increases anger
                    setCompetitive(competitive => competitive + 1); // Increases competitive
                    break;
            
                case "Drawing":
                    setCalm(calm => calm + 1);                      // Increases calm
                    setIntrovert(introvert => introvert + 1);      // Increases introvert
                    break;
            
                case "Playing Video Games":
                    setIntrovert(introvert => introvert + (1/2));      // Increases introvert
                    setCompetitive(competitive => competitive + 1); // Decreases competitive
                    break;
            
                case "Using Social Media":
                    setExtrovert(extrovert => extrovert + 1); 
                    setIntrovert(introvert => introvert + 1);     // Increases extrovert
                    break;
            
                // Weekend options
                case "Relaxing at home":
                    setCalm(calm => calm + 1);  
                    setExtrovert(extrovert => extrovert + (1/2));                    // Increases calm
                    break;
            
                case "Exploring the outdoors":
                    setExtrovert(extrovert => extrovert + 1);  
                    setIntrovert(introvert => introvert - 1);     // Increases extrovert
                    break;
            
                case "Socializing with friends":
                    setExtrovert(extrovert => extrovert + 1);      // Increases extrovert
                    break;
            
                case "Engaging in a hobby":
                    setIntrovert(introvert => introvert + 1);      // Increases introvert
                    break;
            
                // Decision-making options
                case "By following my instincts":
                    setAnger(anger => anger + 1);                   // Increases anger
                    break;
            
                case "After careful analysis":
                    setAnger(anger => anger - 1);                   // Decreases anger
                    setCalm(calm => calm + 1);                      // Increases calm
                    break;
            
                case "By consulting others":
                    setCalm(calm => calm + 1);                      // Increases calm
                    break;
            
                case "Based on past experiences":
                    setCalm(calm => calm + 1);                      // Increases calm
                    break;
            
                // Social situations options
                case "Energized and excited":
                    setExtrovert(extrovert => extrovert + 1);      // Increases extrovert
                    break;
            
                case "Reserved and observant":
                    setIntrovert(introvert => introvert + 1); 
                    setExtrovert(extrovert => extrovert - (1/2));     // Increases introvert
                    break;
            
                case "Comfortable and engaged":
                    setCalm(calm => calm + 1);                      // Increases calm
                    break;
            
                case "Anxious and shy":
                    setIntrovert(introvert => introvert + 1);  
                    setExtrovert(extrovert => extrovert - (1/2));    // Increases introvert
                    break;
            
                // Motivation options
                case "Achieving personal goals":
                    setCompetitive(competitive => competitive + 1); // Increases competitive
                    break;
            
                case "Helping others":
                    setCalm(calm => calm + 1);   
                    setExtrovert(extrovert => extrovert + (1/2));                   // Increases calm
                    break;
            
                case "Gaining knowledge":
                    setIntrovert(introvert => introvert + 1);      // Increases introvert
                    break;
            
                case "Building strong relationships":
                    setExtrovert(extrovert => extrovert + 1); 
                    setCalm(calm => calm + (1/2)); 
                         // Increases extrovert
                    break;
            
                // Work style options
                case "Independent and self-directed":
                    setIntrovert(introvert => introvert + 1);
                    setExtrovert(extrovert => extrovert + (1/2));      // Increases introvert
                    break;
            
                case "Collaborative and team-oriented":
                    setExtrovert(extrovert => extrovert + 1); 
                    setIntrovert(introvert => introvert - 1);      // Increases extrovert
                    break;
            
                case "Structured and organized":
                    setCalm(calm => calm + 1);                      // Increases calm
                    break;
            
                case "Flexible and adaptable":
                    setCompetitive(competitive => competitive - 1); // Decreases competitive
                    break;
            
                // Stress handling options
                case "Exercise and physical activity":
                    setCalm(calm => calm + 1);                      // Increases calm
                    break;
            
                case "Talking it out with friends":
                    setExtrovert(extrovert => extrovert + 1); 
                    setIntrovert(introvert => introvert - 1);     // Increases extrovert
                    break;
            
                case "Meditation and mindfulness":
                    setCalm(calm => calm + 1);   
                    setAnger(anger => anger - 1);                   // Increases calm
                    break;
            
                case "Diving into work or projects":
                    setAnger(anger => anger + 1);                   // Increases anger
                    setCompetitive(competitive => competitive + 1); // Increases competitive
                    break;
            
                // Movie preferences options
                case "Comedies and light-hearted films":
                    setCalm(calm => calm + 1);     
                    setAnger(anger => anger - 1);                 // Increases calm
                    break;
            
                case "Dramas and emotional stories":
                    setIntrovert(introvert => introvert + 1); 
                    setExtrovert(extrovert => extrovert + 1);   
                    setCalm(calm => calm + 1);   
                    
                    // Increases introvert
                    break;
            
                case "Action and adventure":
                    setCompetitive(competitive => competitive + 1); // Increases competitive
                    break;
            
                case "Documentaries and true stories":
                    setIntrovert(introvert => introvert + 1);      // Increases introvert
                    break;
            
                // Communication options
                case "Face-to-face":
                    setExtrovert(extrovert => extrovert + 1);   
                    setIntrovert(introvert => introvert - 1 )   // Increases extrovert
                    break;
            
                case "Through texts or messages":
                    setIntrovert(introvert => introvert + 1);
                    setExtrovert(extrovert => extrovert - 1);   
                        // Increases introvert
                    break;
            
                case "On calls":
                    setIntrovert(introvert => introvert + 1); 
                    
                         // Increases introvert
                    break;
            
                case "In group settings":
                    setExtrovert(extrovert => extrovert + 1);  // Increases extrovert
                    setIntrovert(introvert => introvert - 1 )    
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