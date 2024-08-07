import './Login.css'

function Login() {
    return (
        <div className='login-pai'>
            <div className="login-container">
                <h1>Entrar</h1>
                <form>
                    <input type="text" placeholder='Email ou número de celular' />
                    <input type="password" placeholder='Senha' />
                    <button className='buttonOne'>Entrar</button>
                    <p>OU</p>
                    <button className='buttonTwo'>Use um código de login</button>
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
                </div>
            </div>
        </div>

    )
}

export default Login