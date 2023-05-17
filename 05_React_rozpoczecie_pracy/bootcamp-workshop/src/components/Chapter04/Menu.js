const Menu = ({list}) => {
    return (
        <nav>
            <ul style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {
                    list.map((el) => <li key={el.url}><a href={el.url}>{el.text}</a></li>)
                }
            </ul>
        </nav>
    );
};

export default Menu;
