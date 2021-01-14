import Raect, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [result, setResult] = useState([]);
  const [Search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
const fetchData = async (_event) => {
    const response = await axios.get(
    `https://api.adviceslip.cm/advice/search/${search}`
);
const {entries} = response.data.slips
   setResult(entries)
    
    };
    useEffect(() => {
    fetchdata()
  }, []);

const advices = result ? result.map((advice) => {
    return (
        <div key={advice.id}>
            <h1>{advice.advice}</h1>
        </div>
    )
}) : null

  return (

<div id="searchResults">
    <h1>Search Results</h1>
    <input 
    type="text" 
    placeholder="Search for advice keyword"
    value={value}
    onChange={handleChange}
    



    />
  )
}

export default Search