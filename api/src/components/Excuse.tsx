import { useState } from 'react';
import Axios from 'axios';

function Excuse() {
  const [GeneratedExcuse, setGeneratedExcuse] = useState<string>(""); // Specify the type as string

  const fetchExcuse = (excuseType: string) => { // Specify the type as string
    const encodedExcuseType = encodeURIComponent(excuseType);

    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${encodedExcuseType}/`)
      .then((res) => {
        if (res.data.length > 0) {
          setGeneratedExcuse(res.data[0].excuse);
        } else {
          console.warn('No excuse found for the given type.');
        }
      })
      .catch((error) => {
        console.error('Error fetching excuse:', error);
      });
  };

  return (
    <div className='Excuse'>
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse('party')}>Party</button>
      <button onClick={() => fetchExcuse('family')}>Family</button>
      <button onClick={() => fetchExcuse('office')}>Office</button>

      <p>{GeneratedExcuse}</p>
    </div>
  );
}

export default Excuse;
