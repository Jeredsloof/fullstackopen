const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Filter</h2>
      <form onSubmit={setFilter}>
        <div>
          filter: <input value={filter} onChange={handleFilterChange}></input>
        </div>
      </form>
    </div>
  )
}

export default Filter
