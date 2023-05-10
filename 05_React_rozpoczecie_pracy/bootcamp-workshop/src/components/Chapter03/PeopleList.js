import peopleList from "../../data/people";

const PeopleList = () => {
    return (
        <>
            {
                peopleList.map(el => {
                    return <div className="person" key={el.id}>
                        <img src={el.avatar}/>
                        <div className="info">
                            <h1>{el.title} {el.name} {el.surname}</h1>
                            <p>{el.bio}</p>
                        </div>
                    </div>
                })
            }
        </>
    );
};

export default PeopleList;
