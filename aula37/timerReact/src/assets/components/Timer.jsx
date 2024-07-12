import { useState, useEffect } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
        }, 1000)
    },[])



    return (
        <div>
            <h1>Tempo:</h1>
            <p>{seconds} segundos</p>
        </div>
    )
}

export default Timer