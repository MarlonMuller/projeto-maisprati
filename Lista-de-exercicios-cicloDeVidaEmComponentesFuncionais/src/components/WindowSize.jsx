import {useState, useEffect} from 'react'


function WindowSize () {
    const[number, setNumber] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setNumber(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return  () => {
            window.removeEventListener('resize', handleResize)
        }

    },[])

    return (
        <h2>A largura da tela é de {number}px</h2>
    )
}

export default WindowSize