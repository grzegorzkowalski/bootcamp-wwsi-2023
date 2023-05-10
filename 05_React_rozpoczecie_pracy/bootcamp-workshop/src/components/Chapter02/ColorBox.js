const ColorBox = () => {
    const color = prompt("Wybierz kolor (red, green, blue)?");
    const colorTab = ["red", "green", "blue"];
    const colorExists = colorTab.includes(color);

    if (colorExists) {
        return (
            <div style={{
                width: "100px",
                height: "100px",
                border: `5px solid ${color}`
            }} />
        );
    }
    else {
        return (
            <div style={{
                width: "100px",
                height: "100px",
                border: `5px solid black`,
                color: "white"
            }} >
                Nieprawidłowy kolor
            </div>
        )}
};

export default ColorBox;
