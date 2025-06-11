import { getDatabase, ref, set } from "firebase/database"
import { app } from "./firebase"

const db = getDatabase(app)

function App() {

  const putData = () => {
    set(ref(db, "users/akshay"), {
      id: 1,
      name: "Akshay Rawat",
      age: 22
    })
  }

  return (
    <>
      <h1>Firebase React App</h1>
      <button onClick={putData} >Put Data</button>
    </>
  )
}

export default App

