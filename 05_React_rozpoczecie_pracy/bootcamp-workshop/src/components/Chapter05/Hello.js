const Hello = (props) => {
    console.log(props.nickname);
    return (
        <>
            <h1>Hello, {props.name} {props.surname}</h1>
        </>
    );
};

export default Hello;
