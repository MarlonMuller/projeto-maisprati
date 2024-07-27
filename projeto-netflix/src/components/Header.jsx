import Logo from '../assets/logo-netflix.png'
import './Header.css'


function Header () {
    return (
        <a href="#" className="header-logo">
            <img src={Logo} alt="netflix" />
        </a>
    )
}

export default Header