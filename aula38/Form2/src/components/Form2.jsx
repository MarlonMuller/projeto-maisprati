import { useState } from 'react'

function Form2() {
    const [ address, setAddress ] = useState({
        street: '',
        city: '',
        postalCode: ''
    })


    const handleChange = (event) => {
        const { name, value } = event.target
        setAddress(prevAddress => ({
            ...prevAddress,
            [name]: value
        }))
    }



    const handleSubmit = (event) => {
        event.preventDefault()

            if(!address.street || !address.city || !address.postalCode) {
                alert('Por favor, preencha todos os campos antes de submeter.')
            } else {
                alert(`Endereço: ${address.street}`)
            }

        alert(address)
    }




    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name='rua' value={address.street} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Cidade:
                <input type="text" name='cidade' value={address.city} onChange={handleChange}/>
            </label>
            <br />
            <label>
                CEP:
                <input type="text" name='cep' value={address.postalCode} onChange={handleChange}/>
            </label>
            <br />
            <button type='submit'>Submeter</button>
        </form>
    )
}   

export default Form2