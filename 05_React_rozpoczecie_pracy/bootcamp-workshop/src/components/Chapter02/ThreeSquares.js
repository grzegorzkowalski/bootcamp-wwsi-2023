const ThreeSquares = () => {
    const redDiv = <div style={{
        width: "200px",
        height: "200px",
        backgroundColor: "red"
    }} />
    const greenDiv = <div style={{
        width: "200px",
        height: "200px",
        backgroundColor: "green"
    }} />
    const blueDiv = <div style={{
        width: "200px",
        height: "200px",
        backgroundColor: "blue"
    }} />
    return (
        <div>
            {redDiv}
            {greenDiv}
            {blueDiv}
        </div>
    );
};

export default ThreeSquares;
