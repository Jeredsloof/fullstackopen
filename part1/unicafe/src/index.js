import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({ text }) => <h2>{text}</h2>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
 }

const Buttons = () => {

}

const Statistic = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0){
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <Statistic text='good' value={good}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='bad' value={bad}/>
      <Statistic text='all' value={all}/>
      <Statistic text='average' value={average}/>
      <Statistic text='positive' value={positive}/>
    </div>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const all = good + neutral + bad
  const average = total / all
  const positive = (good / all) * 100 + '%'

  
  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total - 1)
  }

  const statisticsProps = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: average,
    positive: positive
  }

  return (
    <div>
      <Heading text='give feedback' />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad'  />

      <Heading text='statistics' />
      <Statistics {...statisticsProps}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)