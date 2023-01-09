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

}