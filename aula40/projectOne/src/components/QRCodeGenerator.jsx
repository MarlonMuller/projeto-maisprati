import { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const Container = styled.div`
    display: flex;
    justify-content: center;

`
const Title = styled.h1`
    display: flex;
    justify-content: center;
`

const Input = styled.input`
    display: flex;
    justify-content: center;
`

const QRCodeContainer = styled.div`
    display: flex;
    justify-content: center;
`



const QRCodeGenerator = () => {

    const [text, setText] = useState('')

    return (
        <Container>
            <Title>Título</Title>
                <Input 
                type="Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                {text && (
                    <QRCodeContainer>
                        <QRCode value={text} size={256} />
                    </QRCodeContainer>
                )}
        </Container>
    )
}

export default QRCodeGenerator