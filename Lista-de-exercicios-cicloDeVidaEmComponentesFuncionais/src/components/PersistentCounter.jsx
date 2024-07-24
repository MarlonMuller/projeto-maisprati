import {useState, useEffect} from 'react'

function PersistentCounter () {
    const[count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count')
        return savedCount !== null ? JSON.parse(savedCount) : 0
    })

    const incrementar = () => {
        setCount(count +1)
    }

    const decrementar = () => {
        setCount(count -1)
    }

    useEffect(() => {
        localStorage.setItem('count', count)
    },[count])

    return (
        <>
            <h3>Contador: {count}</h3>
            <button onClick={incrementar}>Incrementar contador</button>
            <button onClick={decrementar}>Decrementar contador</button>
        </>
    )
}

export default PersistentCounter