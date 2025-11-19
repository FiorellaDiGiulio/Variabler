import { Person } from "./person.js";

const person1 = new Person (
    "Denniz",
    "Andersson",
    25,
    true,
    ["figurspel","programmering"],
    {role: "student", country: "Sweden"}
);

console.log (person1.getFullName());
