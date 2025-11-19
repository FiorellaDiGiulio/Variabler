import { Person } from "./person.js";

// const person1 = new Person (
//     "Denniz",
//     "Cederqvist",
//     38,
//     true,
//     ["figurspel","programmering"],
//     {role: "student", country: "Sweden"}
// );


const persons = [
    new Person (
        "Zapp",
        "Doe",
        38,
        true,
        ["figurspel", "programmering"],
        {role: "student", country: "Sweden"}
    ),

    new Person (
        "Alex",
        "Andersson",
        31,
        false,
        ["löpning", "klättring"],
        {role: "student", country: "Sweden"}
    ),

    new Person (
        "Maja",
        "Larsson",
        25,
        true,
        ["Programmering", "Spel"],
        {role: "student", country: "Sweden"}
    )

];

const output = document.getElementById("output");

let text = "";

for (let i = 0; i < persons.length; i++){
    text += persons[i].getInfo() + "\n" + "\n"
}

output.textContent = text;

console.log(text);


