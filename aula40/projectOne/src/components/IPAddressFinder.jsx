import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Title = styled.h1`
    margin-bottom: 20px;
`

const Input = styled.input`
    padding: 10px;
    margin-bottom: 10px;
`

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`

const IPContainer = styled.div`
    margin-top: 20px;
    font-size: 20px;
`

const IPAddressFinder = () => {
    const [ip, setIP] = useState('');
    const [ipInfo, setIPInfo] = useState(null);

    const searchIP = async () => {
        if (ip) {
            try {
                const response = await fetch(`https://ipinfo.io/${ip}/json`);
                const data = await response.json();
                setIPInfo(data);
            } catch (error) {
                console.error("Error fetching IP information:", error);
            }
        }
    };

    return (
        <Container>
            <Title>IP Address Finder</Title>
            <Input
                type='text'
                placeholder="Enter IP Address"
                value={ip}
                onChange={(e) => setIP(e.target.value)}
            />
            <Button onClick={searchIP}>Search</Button>
            <IPContainer>
                {ipInfo && (
                    <div>
                        <p><strong>IP:</strong> {ipInfo.ip}</p>
                        <p><strong>City:</strong> {ipInfo.city}</p>
                        <p><strong>Region:</strong> {ipInfo.region}</p>
                        <p><strong>Country:</strong> {ipInfo.country}</p>
                        <p><strong>Organization:</strong> {ipInfo.org}</p>
                    </div>
                )}
            </IPContainer>
        </Container>
    )
}

export default IPAddressFinder;
