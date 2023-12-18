import Axios from 'axios';
import { useState } from 'react';

function AgePredict() {
  const [name, setName] = useState<string>(""); // Adding a type annotation

  const [predictedAge, setPredictedAge] = useState<{
    name: string;
    age: number;
    count: number;
  } | null>(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
    <div className='AgePredict'>
      <input
        type="text"
        placeholder='Ex. Pedro'
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>

      {predictedAge && (
        <>
          <h1>Name: {predictedAge.name}</h1>
          <h1>Predicted Age: {predictedAge.age}</h1>
          <h1>Count: {predictedAge.count}</h1>
        </>
      )}
    </div>
  );
}

export default AgePredict;
