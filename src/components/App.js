const { useState, useEffect } = require("react");

// create your App component here
// import react {useState, useEffect} from "react";

function App () {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect( () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(r => r.json())
    .then(json => {
      setData(json)
      setIsLoaded(true);
     
  }), []})

  if (!isLoaded) return <p> Loading...</p>;
  
  return (

     <img src={data.message} alt="A Random Dog" /> 

   


  

  )
}

export default App;