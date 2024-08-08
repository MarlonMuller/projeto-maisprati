import './Footer.css'
function Footer () {
    return(
        <div className='footer'>
            <h3>Dúvidas? Ligue 0800 591 2876</h3>
            <div className='container'>
                <div>
                    <ul>
                        <li><a href="#">Perguntas frequentes</a></li>
                        <li><a href="#">Preferências de cookies</a></li>
                        <select name="idioma" id="idioma">
                            <option value="pt-BR" >Português</option>
                            <option value="en">English</option>
                        </select>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Centro de ajuda</a></li>
                        <li><a href="#">Informação corporativa</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Termos de uso</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Pivacidade</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer