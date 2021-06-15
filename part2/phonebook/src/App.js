import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [alerts, setAlerts] = useState([])
  const [addMessage, setAddMessage] = useState('')

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const nameExists = (name) =>
    persons.some((p) => p.name.toUpperCase() === name.toUpperCase())

  const personsToShow =
    filter === ''
      ? persons
      : persons.filter((p) =>
          p.name.toUpperCase().includes(filter.toUpperCase())
        )

  const confirm = (message) => window.confirm(message)

  const notify = (color, message) => {
    const newAlert = { color, message }
    setAlerts([...alerts, newAlert])
    setTimeout(() => {
      setAlerts(alerts.filter((a) => a !== newAlert))
    }, 5000)
  }

  const resetForm = () => {
    setNewName('')
    setNewNumber('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (nameExists(newName)) {
      updatePerson(personObject)
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        notify(`green`, `${returnedPerson.name} was added`)
      })
    }
    resetForm()
  }

  const updatePerson = (person) => {
    if (
      confirm(
        `${person.name} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      const oldPerson = persons.find(
        (p) => p.name.toUpperCase() === person.name.toUpperCase()
      )

      personService.update(oldPerson.id, person).then((returnedPerson) => {
        setPersons(
          persons.map((p) => (p.id !== returnedPerson.id ? p : returnedPerson))
        )
        notify(`green`, `The number for ${person.name} was updated`)
      })
    }
  }

  const deletePerson = (person) => {
    if (person === undefined) {
      window.alert(`Person with id ${person.id} was not found`)
    } else {
      if (confirm(`Delete ${person.name} from the phonebook?`)) {
        personService.remove(person.id).catch(() => {
          notify(
            `orange`,
            `The person ${person.name} does not exist on the server`
          )
        })
        setPersons((persons) => persons.filter((p) => p.id !== person.id))
        notify(
          `green`,
          `The person ${person.name} was deleted from the phonebook`
        )
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notifications={alerts} />
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Persons persons={personsToShow} handleDelete={deletePerson} />
    </div>
  )
}

export default App
