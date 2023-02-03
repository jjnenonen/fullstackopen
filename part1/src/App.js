const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercices}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.p1} exercices={props.e1} />
      <Part part={props.p2} exercices={props.e2} />
      <Part part={props.p3} exercices={props.e3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Number of exercices {props.e1 +props.e2 +props.e3}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercices1 = 10
  const part2 = 'Using props to pass data'
  const exercices2 = 7
  const part3 = 'State of a component'
  const exercices3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} e1={exercices1} 
        p2={part2} e2={exercices2} 
        p3={part3} e3={exercices3} />
      <Total e1={exercices1} e2={exercices2} e3={exercices3} />
    </div>
    )
}

export default App;