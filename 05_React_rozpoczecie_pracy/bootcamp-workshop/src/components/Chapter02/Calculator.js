const Calculator = () => {
    const numberA = parseInt(prompt("Podaj liczbę A?"));
    const numberB = parseInt(prompt("Podaj liczbę B?"));
    const operation = prompt("Wybierz operację +,-,*,/?");
    let result = "";
    switch (operation) {
        case "+":
            result = <h1>{numberA + numberB}</h1>;
            break;
        case "-":
            result = <h2>{numberA - numberB}</h2>;
            break;
        case "*":
            result = <h3>{numberA * numberB}</h3>;
            break;
        case "/":
            result = <h4>{numberA / numberB}</h4>;
            break;
    }
    return (
        <div>
            {result}
        </div>
    );
};

export default Calculator;
