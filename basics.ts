let pi : number = 3.14
console.log("hello");
console.log("bye!");
console.log(Math.round(7.8888));

const ad : string = "3"

let goodMovie:string = "Awesome!";

goodMovie = "aa";
// goodMovie = 3; 
// error

// any type

let thing:any = "hello";
// 모든 타입을 확인하지 않고 사용가능
thing = 1;
thing = false;
thing()

// 애너타입이 필요하거나 유용한 경우

// 1. 초기화와 별도로 변수를 선언하는 경우
const movies = ["arrival", "things", "a"];
let foundMovie; //type : any

for (let movie of movies) {
    if (movie === "arrival") {
        foundMovie = "arrival";
    }
}
foundMovie = false; // type : any
foundMovie = 1; // type : any
foundMovie // type : any

// 파라미터에도 타입을 지정해야한다.
function greet (person: string) { // 만약 파라미터를 지정해 주지 않으면 type은 "any type"
    return `hi there, ${person}`
}
greet("jangwoo")
greet(3) // error

const doSomething = (person : string, age : number, isFunny: boolean) => {};

doSomething("kim", 23, true)
doSomething("kim", 23, "aa") // error
// 파라미터의 타입 순서도 맞춰야함,,

function greetHandler (person: string = "stranger") {
    return `Hi there, ${person}`;
}


function square(num: number) {
    return num * num;
}

square(1)
// TS는 변수타입을 추론한 것 처럼 반환타입도 추론이 가능하다.
// 만약 함수안에 return 값을 설정하지 않으면 어떻게 될까?

function square2(num: number) {
    num * num;
}
square2(2)
// 타입은 number가 아닌 void를 나타낸다.
// void는 아무거도 반환하지 않는다.

function rando(num: number) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
// 위 함수는 유니온 타입이다, 반환값이 두 타입을 반환한다.