import React, { useState } from 'react'
import FindCountries from './components/FindCountries'
import Countries from './components/Countries'

const App = () => {
  const [searchFilter, setSearchFilter] = useState([])

  return (
    <div>
      <FindCountries
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Countries
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
    </div>
  )
}

export default App
