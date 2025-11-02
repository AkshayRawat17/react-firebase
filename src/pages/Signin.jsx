import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../firebase"

const auth = getAuth(app)

export default function SigninPage() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const signinuser = () => {
        signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then((value) => alert("Signin Successfully"))
         .catch((error) => console.log(error))
    }

    return (
        <div className="signin-page">
            <h2>Signin Page</h2>
            <label>Email:</label>
            <input type="email" placeholder='Enter your email here' onChange={(e) => setEmail(e.target.value)} value={email} />
            <label>Password:</label>
            <input type="password" placeholder='Enter your password here' onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={signinuser} >Signin</button>
        </div>
    )
}
