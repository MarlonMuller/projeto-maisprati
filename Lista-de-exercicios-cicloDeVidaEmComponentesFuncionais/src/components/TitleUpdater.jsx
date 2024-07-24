import { useState, useEffect } from 'react'

function TitleUpdater() {
    const [number, setNumber] = useState(0)

    const Incrementar = () => {
        setNumber(number +1)
    }

    const Decrementar = () => {
        setNumber(number -1)
    }

    useEffect(() => {
        document.title = `Number: ${number}`
    },[number])

    return (
        <>
            <h1>{number}</h1>
            <button onClick={Incrementar}>Incrementar título</button>
            <button onClick={Decrementar}>Decrementar título</button>
        </>
    )
}

export default TitleUpdater