import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryData = ({ countries }) => {
  const [weather, setWeather] = useState(null)
  const params = {
    access_key: '05531a0b8409cf5dec5669b876d9c682',
    query: countries[0].name,
  }

  useEffect(() => {
    const dataHook = () => {
      axios
        .get('http://api.weatherstack.com/current', { params })

        .then((response) => {
          setWeather(response.data)
        })
    }
    dataHook()
  }, [countries[0].name])

  console.log('weather:', weather)

  return (
    <div>
      <h2>{countries[0].name}</h2>
      <p>capital {countries[0].capital}</p>
      <p>population {countries[0].population}</p>
      <h2>Spoken languages</h2>
      <ul>
        {countries[0].languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={countries[0].flag} style={{ width: 150, height: 150 }}></img>
      <h2>Weather in {countries[0].name}</h2>
      <p>
        <strong>temperature:</strong>
      </p>
      <img></img>
      <p>
        <strong>wind:</strong>
      </p>
    </div>
  )
}

export default CountryData
