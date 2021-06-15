const FindCountries = ({ searchFilter, setSearchFilter }) => {
  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value)
    console.log(event.target.value)
  }

  return (
    <p>
      find countries{' '}
      <input
        type='search'
        value={searchFilter}
        onChange={handleSearchChange}
      ></input>
    </p>
  )
}

export default FindCountries
