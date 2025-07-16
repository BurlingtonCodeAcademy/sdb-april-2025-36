import React, { useState } from 'react'

export default function Form() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted!")

        setUsername("")
        setEmail("")
    }

    return (
        <div>
            <h2>User Register Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
