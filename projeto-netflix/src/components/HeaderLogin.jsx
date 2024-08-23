import Logo from '../assets/logo-netflix.png'
import './HeaderLogin.css'


function HeaderLogin () {
    return (
        <a href="#" className="header-logo">
            <img src={Logo} alt="netflix" />
        </a>
    )
}

export default HeaderLogin