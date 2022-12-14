// const activeUser: [] = [1]
// error 
// type이 빈 배열이라는 것을 나타낸다. 따라서 type을 지정해야 한다.

// 타입 지정 배열
// 숫자나 문자열 배열을 만들고 싶다면 타입을 지정하면 된다.

// const activeUser: string = [];
// 위 코드는 단일 문자열 이라는 뜻임.

const activeUser: string[] = ["colt", "merry"];
// 위 코드는 문자열 배열이라는 뜻으로 원한다면 빈 사앹로 시작할 수 있다.

const test = ["1", 1];

console.log(test[1]);

const ageList: number[] = [44, 55, 66];

ageList[1] = 99;
ageList[1] = "99";
// error

const bools: Array<boolean> = [];

type Point = {
    x : number;
    y : number;
};

const coords: Point[] = [];
coords.push({x : 23, y : 8}, {x : 56, y : 11});

// 다차원 배열
// 이런식으로 2차원 배열을 선언하려면 어떻게 해야 할까요?
const board: string[] = [["x", "o", "x"], ["x", "o", "x"], ["x", "o", "x"]];
// 위 처럼 작성하면 에러가 난다. 이것은 무자열을 갖는 단일 배열에 유효한 타입이기 때문이다.
const board2: string[][] = [["x", "o", "x"], ["x", "o", "x"], ["x", "o", "x"]];
// 이럴땐 이런식으로 타입뒤에 배열타입을 한번 더 사용하면 된다.
const board3: string[][][] = [[["1"]]];
// 3차원 배열도 마찬가지다.

// exercise

// 1
const ages: number[] = [];

// 2
const gameBoard: string[][] = [[],["asd"]];

// 3 
type Product = {
    name : string;
    price : number;
};

// 4


function getTotal(x: Product[]): number {
    let total: number = 0;

    for (let i = 0; i < x.length; i++) {
        total += x[i].price + total;
    }
    return total;
}

