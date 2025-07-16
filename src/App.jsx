import NewComponent from "./components/NewComponent"
import Form from "./components/Form"

function App() {
  // computational logic and state management


  return (
    // everything presentational in the browser
    <>
      <h1>Hi Mom</h1>
      <NewComponent fruit="apple" plant="ivy" color="green" age={39} students={["John", "Jane", "Doe"]} />
      <Form />
    </>
  )
}

export default App
