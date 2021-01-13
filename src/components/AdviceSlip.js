import React, { useState, useEffect } from "react";
import axios from "axios";
import Advice from "./Advice";
import { RANDOM_URL } from "../Constants";

function AdviceSlip () {
const [randAdvice, setrandAdvice] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(RANDOM_URL);
      const { results } = response.data;
      setAdvice(results);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, []);
return (
  //<ul className="container collection with-header" style={{ marginTop: 25 }}>
    {randAdvice.map((randAdvice, index) => {
      const { slip, advice } = RandomAdvice;
      return <RandomAdvice name={name} url={url} key={index} />;
    })}
  //</ul>
);
}


export default AdviceSlip;




  

export default Search;
