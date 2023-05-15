const Menu = () => {
    return (
        <nav>
            <ul style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <li><a href="/">Strona główna</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/cennik">Cennik</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
            </ul>
        </nav>
    );
};

export default Menu;
