const Sum = ({tab}) => {
    return (
        <h1>
            {
               tab.reduce((a,b) => a+b)
            }
        </h1>
    );
};

export default Sum;
