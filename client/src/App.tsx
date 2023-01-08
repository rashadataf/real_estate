import './App.css'
import { User } from "common/types";

const rashad: User = {
  name: "Rashad Ataf",
  email: "rashadattaf@gmail.com"
}

function App() {
  return (
    <div className="App">
      <h1>Client App</h1>
      <p>User Name: {rashad.name}</p>
      <p>User Email: {rashad.email}</p>
    </div>
  )
}

export default App
