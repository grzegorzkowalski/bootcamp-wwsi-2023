const LikeBox = ({likes}) => {
    return (
        <div>
            <p style={{
                width: "100px",
                height: "100px",
                border: "2px solid black",
                margin: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>{likes}</p>
            <button>Like</button>
        </div>
    );
};

export default LikeBox;
