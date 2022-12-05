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
