function Header ({title, links}) {
    return (
        <div>

            <h1>{title}</h1>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href="{link.url}">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header