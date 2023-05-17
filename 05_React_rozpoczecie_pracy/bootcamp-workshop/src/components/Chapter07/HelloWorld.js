import {useState, useEffect} from "react";

const HelloWorld = () => {
    const [text, setText] = useState("Hello World");

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setText("Hello Everybody")
        }, 5000);

        return () => clearTimeout(timeoutID);
    }, []);

    return (
        <h1>
            {text}
        </h1>
    );
};

export default HelloWorld;
