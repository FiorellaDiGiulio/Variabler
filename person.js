export class Person {
    constructor(firstName,lastName,age,isActive,hobbies,meta) {
        this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
        this.isActive = isActive;
        this.hobbies = hobbies;
        this.meta = meta;
}

// getFullName() {
//     return `${this.firstName} ${this.lastName}`;
// }

getInfo() {
    // return `${this.getFullName()}, ${this.age} år, roll: ${this.meta.role}, aktiv: ${this.isActive}`;
    return `${this.firstName} ${this.lastName} är ${this.age} år gammal. Aktiv ${this.meta.role} = ${this.isActive} `;
}

}

