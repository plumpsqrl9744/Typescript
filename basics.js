var pi = 3.14;
console.log("hello");
console.log("bye!");
console.log(Math.round(7.8888));
var ad = "3";
var goodMovie = "Awesome!";
goodMovie = "aa";
// goodMovie = 3; 
// error
// any type
var thing = "hello";
// 모든 타입을 확인하지 않고 사용가능
thing = 1;
thing = false;
thing();
// 애너타입이 필요하거나 유용한 경우
// 1. 초기화와 별도로 변수를 선언하는 경우
var movies = ["arrival", "things", "a"];
var foundMovie; //type : any
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "arrival") {
        foundMovie = "arrival";
    }
}
foundMovie = false; // type : any
foundMovie = 1; // type : any
foundMovie; // type : any
// 파라미터에도 타입을 지정해야한다.
function greet(person) {
    return "hi there, ".concat(person);
}
greet("jangwoo");
greet(3); // error
var doSomething = function (person, age, isFunny) { };
doSomething("kim", 23, true);
doSomething("kim", 23, "aa"); // error
// 파라미터의 타입 순서도 맞춰야함,,
function greetHandler(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person);
}
function square(num) {
    return num * num;
}
square(1);
// TS는 변수타입을 추론한 것 처럼 반환타입도 추론이 가능하다.
// 만약 함수안에 return 값을 설정하지 않으면 어떻게 될까?
function square2(num) {
    num * num;
}
square2(2);
// 타입은 number가 아닌 void를 나타낸다.
// void는 아무거도 반환하지 않는다.
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
// 위 함수는 유니온 타입이다, 반환값이 두 타입을 반환한다.
var color = ["red", "orange", "yellow"];
// color.map(color => {
//     return color.toUpperCase()
// })
color;
var red = "red";
red.toUpperCase();
// 이때 파라미터 타입을 명시하지 않으면 type은 any를 반환한다.
function 함수(x) {
    return x * 2;
}
function doNothing() {
    return undefined;
}
function neverDoNothing(msg) {
    return undefined;
    // void와 다르게 undefined도 반환하지 않
}
// void와는 다른 개념이다.
// void는 void의 경우 아무것도 반환하지 않은 경우 함수의 백그라운드에서 undefined 상태로 반환한다.
// 하지만 never함수는 아무것도 반환하면 안된다는 것을 나타내기 위해 사용하고, 이 함수는 일반적으로ㅓ 예외를 발생시키는 함수가 될 것이다.
function throwNewError(msg) {
    throw new Error(msg);
}
// 그래서 아무것도 반환할 일이 없거나 어떤 루프에서 연속적으로 실행되는 함수이다.
// 따라서 절대 끝나지 않음!
// 그래서 undefined 또는 이상한 값을 반환한 것과는 다르다.
// 절대 아무것도 반환할 기회가 없어야 함!
