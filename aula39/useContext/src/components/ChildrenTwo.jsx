import useAppContext from '../hook/useAppContext.jsx'

function ChildrenTwo () {
    const {setName} = useAppContext()
    return (
        <>
            <h3>Planeta</h3>
            <button onClick={() => setName('Iury')} >Alterar o nome</button>
        </>
    )
}

export default ChildrenTwo