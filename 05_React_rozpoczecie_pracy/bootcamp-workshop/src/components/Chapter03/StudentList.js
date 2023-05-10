import studentList from "../../data/students";

const StudentList = () => {
    return (
        <ul>
            {
                studentList.map(el => {
                    return <li key={el.id}>
                        {el.name} {el.surname}
                        wynik: {el.score},
                        {el.pass
                            ? <span style={{color: "green"}}>zaliczone</span>
                            : <span style={{color: "red"}}>niezaliczone</span>
                        }
                    </li>
                })
            }
        </ul>
    );
};

export default StudentList;
