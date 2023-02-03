const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  //console.log(props)
  return (
    <div>
      <p>{props.course.parts[0].name} {props.course.parts[0].exercices} </p>
      <p>{props.course.parts[1].name} {props.course.parts[1].exercices} </p>
      <p>{props.course.parts[2].name} {props.course.parts[2].exercices} </p>
    </div>
  )
}

const Total = (props) => {
  //console.log(props)
  return (
    <div>
      Number of exercices {props.course.parts[0].exercices +
        props.course.parts[1].exercices + 
        props.course.parts[2].exercices }
    </div>
  )
}

const App = () => {
  const course = {
    name:'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercices:10
      },
      {
        name: 'Using props to pass data',
        exercices: 7
      },
      {
        name: 'State of a component',
        exercices: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
    )
}

export default App;