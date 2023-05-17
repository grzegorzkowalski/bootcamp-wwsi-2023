import {useState, useEffect} from "react";

const Box = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setColor(prevState => {
                if (prevState === "green") {
                    return "red"
                }
                else {
                    return "green";
                }
            });

            return () => clearInterval(intervalID);

        }, 2500);
    }, [])

    return (
        <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: color
        }} />
    );
};

export default Box;
