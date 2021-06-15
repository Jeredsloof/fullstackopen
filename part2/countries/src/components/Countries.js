import axios from 'axios'
import { useState, useEffect } from 'react'
import CountryData from './CountryData'

const Countries = ({ searchFilter, setSearchFilter }) => {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState([])

  const countryHook = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchFilter}`)
      .then((response) => {
        setCountries(response.data)
      })
      .catch((error) => {
        console.log('error', error.message)
      })
  }
  useEffect(countryHook, [searchFilter])

  const showCountry = (event) => {
    setSearchFilter(event.target.id)
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length > 1 && countries.length < 10) {
    return countries.map((country) => (
      <p key={country.numericCode}>
        {country.name}{' '}
        <button onClick={showCountry} id={country.name}>
          show
        </button>
      </p>
    ))
  } else if (countries.length === 1) {
    return (
      <div>
        <CountryData countries={countries} />
      </div>
    )
  } else {
    return null
  }
}

export default Countries
