import NewComponent from "./components/NewComponent"

function App() {
  // computational logic and state management


  return (
    // everything presentational in the browser
    <>
      <h1>Hi Mom</h1>
      <NewComponent fruit="apple" plant="ivy" color="green" age={39} students={["John", "Jane", "Doe"]} />
    </>
  )
}

export default App
