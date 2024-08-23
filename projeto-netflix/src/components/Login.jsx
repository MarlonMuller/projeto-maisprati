import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Login.css'
import HeaderLogin from './HeaderLogin'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if( username === 'admin' && password === 'admin') {
            navigate('/principal');
        } else {
            alert("usuário ou senha incorretos!")
            let pErro = document.getElementById("erro");
            pErro.textContent = `Senha incorreta para ${username}. Você pode usar um código de acesso, redefinir sua senha ou tentar novamente.`
        }
    }



    return (
        <>
        <HeaderLogin />
        <div className='login-pai'>
            <div className="login-container">
                <h1>Entrar</h1>
                <p id='erro'></p>
                <form onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        placeholder='Email ou número de celular'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}    
                    />
                    <input 
                        type="password" 
                        placeholder='Senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button className='buttonOne' type='submit'>Entrar</button>
                    <p>OU</p>
                    <button className='buttonTwo' type='button'>Use um código de login</button>
                </form>
                <div className="login-option">
                    <a href="#">Esqueceu sua senha?</a>
                    <div>
                        <input type="checkbox" id='remember' />
                        <label htmlFor="remeber">Lembre-se de mim</label>
                    </div>
                </div>
                <div className='login-signup'>
                    <p>Novo por aqui? <a href="#">Assine agora</a> </p>
                    <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um bot. <a id='saberMais' href="#">Saber mais.</a></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login