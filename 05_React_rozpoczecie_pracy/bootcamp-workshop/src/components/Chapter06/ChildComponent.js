import GrandchildComponent from "./GrandchildComponent";

const ChildComponent = () => {
    return (
        <>
            <h2>
                Jestem dzieckiem
            </h2>
            <GrandchildComponent />
        </>
    );
};

export default ChildComponent;
