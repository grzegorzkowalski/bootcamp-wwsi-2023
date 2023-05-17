import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    return (
        <>
          <h1>Jestem rodzicem</h1>
          <ChildComponent />
        </>
    );
};

export default ParentComponent;
