interface Person {
    readonly id : number;
    first : string;
    last : string;
    nickname ?: string;
    sayHi: () => string;
}

const thomas: Person = {
    first : "Thomas",
    last : "Hardy",
    nickname : "Tom",
    id : 1231,
    sayHi: (name : string)) => {
        return "hi! hi!"
    }
};


interface Dog {
    name : string;
    age : number;
}

interface Dog {
    breed : string;
}

const me: Dog = {
    name : "jangwoo",
    age : 26,
    breed : "Shepherd"
};

interface ServiceDog extends Dog {
    job : "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name : "jangwoo",
    age : 25,
    breed : "lab",
    job : "bomb"
}

interface Human {
    name : string;
}

interface Employee {
    readonly id : number;
    email : string;
}

interface Engineer extends Human, Employee {
    level : string;
    languages : string[];
}

const jangwoo: Engineer = {
    name : "jangwoo",
    email : "jangwoo@gamil.com",
    id : 123123,
    level : "junior",
    languages : ["JS","Python"]
}



interface cat {
    name : string;
}
interface cat {
    age : number;
}

