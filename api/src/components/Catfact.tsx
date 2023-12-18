import { useEffect, useState } from 'react';
import Axios from 'axios';

function Catfact() {
  const [catFact, setCatFact] = useState('');

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    // Fetch cat fact when the component mounts
    fetchCatFact();
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </>
  );
}

export default Catfact;
