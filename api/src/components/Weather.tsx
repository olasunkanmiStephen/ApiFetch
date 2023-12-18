import { useState, useEffect } from 'react'
const URL = `http://api.weatherapi.com/v1/current.json?key=ac01ff9b28b84b4883b113354231612&q=London&aqi=no`


const Weather = () => {
  const [ temp, setTemp ] = useState(0)

  useEffect(() => {
    const fetchData =async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        setTemp(json.current.temp_f);
      })
    }
    fetchData();
  }, [])
  return (
    <div className='weather'>
      London Temp Now: {temp}F
    </div>
  )
}

export default Weather;