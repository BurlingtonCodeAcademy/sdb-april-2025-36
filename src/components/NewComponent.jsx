import React from 'react'

export default function NewComponent(props) {

    console.log(props)
    return (
        <div>
            <h2>New Component</h2>
            <p>Fruit: {props.fruit}</p>
            <p>Plant: {props.plant}</p>
            <p>Color: {props.color}</p>
            <p>Age: {props.age}</p>
            <p>Students: {props.students.join(", ")}</p>
        </div>
    )
}
