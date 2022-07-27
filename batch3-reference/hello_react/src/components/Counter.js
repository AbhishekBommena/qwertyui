import React, { useEffect, useState } from "react"
import { Button } from 'primereact/button';

function Counter() {
    const [count, setCount] = useState(0)

    function incrementCounter() {
        setCount(count + 1)
    }

    function decrementCounter() {
        setCount(count - 1)
    }

    useEffect(() => {
        console.log("Counter useEffect", count)
    }, [])

    return (
        <>
            <h3>Counter : {count} </h3>
            {/* <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button> */}
            <Button onClick={incrementCounter} label="Increment" className="p-button-secondary"/>
            <Button onClick={decrementCounter} label="Decrement" />

            <h3>Counter : {count} </h3>
        </>
    )
}

export default Counter;

