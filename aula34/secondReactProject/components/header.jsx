import './header.css'


function Header () {
    return (
        <div className='headerDiv'>
            <img src="../src/assets/react.png" alt="react" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header