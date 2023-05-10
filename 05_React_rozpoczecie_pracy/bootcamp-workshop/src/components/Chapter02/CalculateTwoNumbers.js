const CalculateTwoNumbers = () => {
    const randomNumber = () => {
        return Math.round(Math.random() * 9 + 1);
    }
    const numberA = randomNumber();
    const numberB = randomNumber();
    const answer = parseInt(prompt(`Jaki jest wynik dodawania ${numberA} + ${numberB}`));
    return (
        <div style={{
            width: "200px",
            height: "200px",
            backgroundColor: answer === numberA + numberB ? "green" : "red"
        }}>
            {answer === numberA + numberB ? "Dobra odpowiedź" : "Zła odpowiedź" }
        </div>
    );

};

export default CalculateTwoNumbers;
