import React, { useState } from 'react'

export default function Form() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("Form Submitted!")

            const response = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email
                })
            })

            const data = await response.json();

            alert("user registered successfully!")
            setUsername("")
            setEmail("")
        } catch (error) {
            console.error(error)
        }
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
                    <label htmlFor="email">Email:</label>
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
