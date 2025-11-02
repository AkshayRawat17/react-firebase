import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from 'react'
import { app } from "../firebase"

const auth = getAuth(app)

export default function SignupPage() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((value) => alert("Account Created Successfully"))
    }

    return (
        <>
            <div className="signup-page">
                <h2>SignUp Page</h2>
                <label>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required placeholder='Enter your email here' />
                <label>Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required placeholder='Enter your Password here' />
                <button onClick={createUser} >Signup</button>
            </div>
        </>
    )
}
