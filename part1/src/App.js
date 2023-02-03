import {useState} from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}> {text} </button>
)
  
const StatisticLine = ({ name, value, end }) => ( 
  <div>{name} {value} {end}</div> 
  )

const Statistics = (props) => {
  //console.log(props)
  if (props.all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
     <table>
      <tbody>
        <tr>
          <td><StatisticLine name='good' /></td>
          <td><StatisticLine value={props.good} /></td>
        </tr>
        <tr>
          <td><StatisticLine name ='neutral' /></td>
          <td><StatisticLine value={props.neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine name ='bad' /></td>
          <td><StatisticLine value={props.bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine name='all' /></td>
          <td><StatisticLine value={props.all} /></td>
        </tr>
        <tr>
          <td><StatisticLine name='average' /></td>
          <td><StatisticLine value={props.average/props.all} /></td>
        </tr>
        <tr>
          <td><StatisticLine name='positive' /></td>
          <td><StatisticLine value={(props.good/props.all)*100} end='%' /></td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage(average+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }
  const handleBad = () => {
    setBad(bad+1)
    setAll(all+1)
    setAverage(average-1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text ='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics  all={all} good={good} neutral={neutral} bad={bad} average={average} />
    </div>
  )
}

export default App;