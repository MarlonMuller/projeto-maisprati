import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #00ccff;
    border-radius: 25px;
    width: 300px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 250px;
    margin: 10px;
`
const Title = styled.h1`
    display: flex;
    color: white;
    margin: 0;
`
const Description = styled.p`
    color: white;
`
const Input = styled.input`
    color: black;
    border-radius: 20px;
    border: none;
`
const Button = styled.button`
    background-color: blue;
    color: white;
    margin-top: 10px;
    border-radius: 20px;
    border: none;
    padding: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`


function LoginScreen () {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    return(
        <Container>
            <Background>
                <Content>
                <Title>Login</Title>
                <Description>Username</Description>
                <Input 
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <Description>Senha</Description>
                <Input 
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button>Login</Button>
                </Content>
            </Background>
        </Container>
    )
}

export default LoginScreen