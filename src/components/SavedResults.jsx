import { useEffect, useState } from "react";

function SavedResults() {
  const [Data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const dataFromLocalStorage = localStorage.getItem("UserResults");
      if (dataFromLocalStorage) {
        setData(JSON.parse(dataFromLocalStorage));
      }
    } catch (err) {
      setError("Error loading data from localStorage.");
    }
  }, []); // Make sure the useEffect hook is outside of any conditional render

  if (error) {
    return <div>{error}</div>; // This renders the error, but doesn't affect hooks
  }

  if (!Data) {
    return <div>Loading or No saved data found.</div>; // This just returns loading text, hooks are unaffected
  }

//   return (
//     <div className="Results">
//       <h2>Saved Results</h2>
//       <p>Anger: {Data.angerPerc}%</p>
//       <p>Calm: {Data.calmPerc}%</p>
//       <p>Competitive: {Data.competitivePerc}%</p>
//       <p>Introvert: {Data.introvertPerc}%</p>
//       <p>Extrovert: {Data.extrovertPerc}%</p>
//     </div>
//   );

  return (
    <div className="Result">
        <h2 id="heading">RESULTS</h2>
        <div className="resultLine">
            <span>Calm:</span>
            <span>{Data.calmPerc}%</span>
        </div>
        <div className="resultLine">
            <span>Anger:</span>
            <span>{Data.angerPerc}%</span>
        </div>
        <div className="resultLine">
            <span>Competitive:</span>
            <span>{Data.competitivePerc}%</span>
        </div>
        <div className="resultLine">
            <span>Introvert:</span>
            <span>{Data.introvertPerc}%</span>
        </div>
        <div className="resultLine">
            <span>Extrovert:</span>
            <span>{Data.extrovertPerc}%</span>
        </div>
        </div>

)
}
export default SavedResults;
