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
function greet (person: string) {
    return `hi there, ${person}`
}
greet("jangwoo")
greet(3) // error

