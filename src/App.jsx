// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
// import { app } from "./firebase"
import SignupPage from "./pages/Signup"
import SigninPage from "./pages/Signin"

// const auth = getAuth(app)

function App() {

  // const signupUser = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     "akshayrawat.dev@gmail.com",
  //     "akshayrawat123"
  //   ).then((value) => console.log(value))
  // }

  return (
    <>
      <SignupPage />
      <SigninPage />
    </>
  )
}

export default App

