import React, { useState, useContext, createContext } from "react";
import SavedResults from "./SavedResults.jsx";
import Greetings from "./Greetings.jsx";
import SaveInfo from "./SaveInfo.jsx";

export const UserContext = createContext();
export const GuestContext = createContext();

function Username() {
  const [openSavedResults, setOpenSavedResults] = useState(false);

  const open = () => {
    setOpenSavedResults(true);
  };


  const [name, setName] = useState("");
  const [isLoggedIn, setLogin] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setLogin(true);
    } else {
      setIsAlert(true);
    }
  };

  const toggleLogin = () => {
    setLogin(true);
    setIsGuest(true);
  };
  if (openSavedResults) {
    return <SavedResults />;
  }
  if (!isLoggedIn) {
    return (
      <>
        <div>
          <button className="button" onClick={open}>
            Saved Results!
          </button>
        </div>
        <form onSubmit={handleSubmit} className="login">
          <h2>Enter your Name</h2>
          <input
            type="text"
            id="Name"
            placeholder="John, Ahmed etc"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
          <h1 className={`alert ${isAlert ? "setAlert" : ""}`}>Enter name first!</h1>
          <button id="preferNotsayButton" onClick={toggleLogin}>
            Prefer not say
          </button>
        </form>
      </>
    );
  }

  // When logged in, show greetings
  if (isLoggedIn) {
    return (
      <GuestContext.Provider value={{ isGuest }}>
        <UserContext.Provider value={{ name }}>
          <Greetings name={name} isGuest={isGuest} />
        </UserContext.Provider>
      </GuestContext.Provider>
    );
  }

 
  return null; 
}

export default Username;
