const employee = {
    name: "Krzysztof",
    surname: "Nowak",
    age: 54,
    occupation: "Policjant"
}

for (const employeeKey in employee) {
    console.log(employee[employeeKey]);
    console.log(employeeKey);
}
