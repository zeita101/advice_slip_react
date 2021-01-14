import React, { useState, useEffect } from "react";
import axios from "axios";
import Advice from "./Advice";
import { RANDOM_URL } from "../Constants";

function AdviceSlip() {
  const [randAdvice, setRandAdvice] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(RANDOM_URL);
      const { slip } = response.data;
      setRandAdvice(slip.advice);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="advicewrap">
      <p>Get Advice</p>
      <button type="submit" onClick={fetchData}>
        Get Advice
      </button>
      <button type="submit">Search Advice</button>
      <Advice randAdvice={randAdvice} />
    </div>
  );
}
export default AdviceSlip;
