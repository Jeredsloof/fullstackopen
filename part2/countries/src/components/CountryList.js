const CountryList = ({ countriesShown }) => {
  console.log(countriesShown)
  return (
    <div>
      {countriesShown.map((country) => (
        <li key={country.name}> {country.name}</li>
      ))}
    </div>
  )
}

export default CountryList
