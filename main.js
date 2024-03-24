#!/usr/bin/env Nodecls
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter frist nummber", tupe: "number", name: "firstNumber" },
    { message: "Enter scecond number", type: "number", name: "secondNumber" },
    {
        message: "Select one of operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statment
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
}
else {
    console.log("please select valid operator ");
}
