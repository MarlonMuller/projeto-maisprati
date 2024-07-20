import { useState } from 'react'
import axios from 'axios'

function Forms () {

    const [user, setUser] = useState({
        name: '',
        job: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target

        setUser({
            ...user,
            [name]: value
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('https://reqres.in/api/users', user)

            alert(`Usuário criado com sucesso! ID ${response.data.id}, Nome: ${response.data.name}, job: ${response.data.job}`)

            console.log(response.data)
        } catch (error) {
            console.error(error)
            alert(`Erro ao criar o usuário`)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
                <h1>Contato</h1>
            
                <label>Nome
                    <input type="text" name='name' value={user.name} onChange={handleChange} />
                </label>
                <br />
                <label>Profissão
                    <input type="text" name='job' value={user.job} onChange={handleChange} />
                </label>
                <br />           
                <button type="submit">Enviar</button>
        </form>
    )
}

export default Forms