// let pi : number = 3.14
// console.log("hello");
// console.log("bye!");
// console.log(Math.round(7.8888));

// const ad : string = "3"

// let goodMovie:string = "Awesome!";

// goodMovie = "aa";
// // goodMovie = 3; 
// // error

// // any type

// let thing:any = "hello";
// // 모든 타입을 확인하지 않고 사용가능
// thing = 1;
// thing = false;
// thing()

// // 애너타입이 필요하거나 유용한 경우

// // 1. 초기화와 별도로 변수를 선언하는 경우
// const movies = ["arrival", "things", "a"];
// let foundMovie; //type : any

// for (let movie of movies) {
//     if (movie === "arrival") {
//         foundMovie = "arrival";
//     }
// }
// foundMovie = false; // type : any
// foundMovie = 1; // type : any
// foundMovie // type : any

// // 파라미터에도 타입을 지정해야한다.
// function greet (person: string) { // 만약 파라미터를 지정해 주지 않으면 type은 "any type"
//     return `hi there, ${person}`
// }
// greet("jangwoo")
// greet(3) // error

// const doSomething = (person : string, age : number, isFunny: boolean) => {};

// doSomething("kim", 23, true)
// doSomething("kim", 23, "aa") // error
// // 파라미터의 타입 순서도 맞춰야함,,

// function greetHandler (person: string = "stranger") {
//     return `Hi there, ${person}`;
// }


// function square(num: number) {
//     return num * num;
// }

// square(1)
// // TS는 변수타입을 추론한 것 처럼 반환타입도 추론이 가능하다.
// // 만약 함수안에 return 값을 설정하지 않으면 어떻게 될까?

// function square2(num: number) {
//     num * num;
// }
// square2(2)
// // 타입은 number가 아닌 void를 나타낸다.
// // void는 아무거도 반환하지 않는다.

// function rando(num: number) {
//     if (Math.random() < 0.5) {
//         return num.toString();
//     }
//     return num;
// }
// // 위 함수는 유니온 타입이다, 반환값이 두 타입을 반환한다.

// const color = ["red", "orange", "yellow"];
// // color.map(color => {
// //     return color.toUpperCase()
// // })
// color

// const red = "red"
// red.toUpperCase()

// // 이때 파라미터 타입을 명시하지 않으면 type은 any를 반환한다.
// function 함수(x: number) :void{
// 	return x * 2
// }

// function test1(x: number): void {
// 	x * 2;
// }
// test1(2);
// // error

// function doNothing(): void {
//     return undefined;
// }

// function neverDoNothing(msg: string): never {
//     return undefined;
//     // void와 다르게 undefined도 반환하지 않음
// }
// // void와는 다른 개념이다.
// // void는 void의 경우 아무것도 반환하지 않은 경우 함수의 백그라운드에서 undefined 상태로 반환한다.
// // 하지만 never함수는 아무것도 반환하면 안된다는 것을 나타내기 위해 사용하고, 이 함수는 일반적으로ㅓ 예외를 발생시키는 함수가 될 것이다.

// function throwNewError(msg: string): never {
//     throw new Error(msg)
// }
// // 그래서 아무것도 반환할 일이 없거나 어떤 루프에서 연속적으로 실행되는 함수이다.
// // 따라서 절대 끝나지 않음!

// // 그래서 undefined 또는 이상한 값을 반환한 것과는 다르다.
// // 절대 아무것도 반환할 기회가 없어야 함!




// function twoFer(name: string){
//   return name === "" ? `One For you, one for me` : `One For ${name}, one for me`;
// }

// console.log(twoFer(""))
// console.log(twoFer("Elton"))

// function test(): void {
//     return 2+2;
// }

// // 객체타입


let coordinate: {x: number, y:number} =  {x: 34, y: 22};
// 객체타입을 사용하는 변수

function randomCoordinete(): {x:number, y:number} {
    return {x: Math.random(), y: Math.random()};
}
// 객체 리터럴 형태의 반환 타입 애너테이션을 가지는 함수
function printName (person: { first: string, last: string}) {
    console.log(`print ${person.first} ${person.last}`) 
}
// 함수의 파라미터 타입 애터네이션을 작성하는 법

let gom: {last: string, first: string} = {
    last : "asd",
    first : "asd",
}

// console.log("gom",gom.last);


let single = {first: "Mick", last : "Jagger", age: 432, isAlive: true}


let personTest = {first: "Mick"}
printName(personTest);


