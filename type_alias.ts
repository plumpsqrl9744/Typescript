// type Point = {
//     x: number;
//     y: number;
// }
// // type alias

// let number: Point = { x: 34, y: 2 };

// function randomCoordinete(): Point {
//     return { x: Math.random(), y: Math.random()};
// }

// function doublePoint(point: Point): Point {
//     return { x: point.x * 2, y: point.x * 2 };
// }

// type MyNum = number;
// let age: MyNum = 123123;
// // 객체 타입 뿐만 아니라 원시 타입도 가능하다!


// // Nested Object

// type Song = {
//     title : string;
//     artist: string;
//     numStreams : number;
//     credits : {
//         producer : string;
//         writer : string;
//     };
// };

// function calculatePayout(song : Song): number{
//    return song.numStreams * 0.0033;
// };

// function printSong(song : Song): void{
//     console.log(`${song.title} - ${song.artist}`);
// }

// const mySong: Song = {
//     title : "unchained Melody",
//     artist : "Right",
//     numStreams : 123123,
//     credits : {
//         producer : "Phil Spector",
//         writer : "Alex North"
//     }
// }

// console.log(calculatePayout(mySong))

// printSong(mySong)

// // 선택적 프로퍼티

// type Point2 = {
//     x: number;
//     y: number;
//     z?: number;
// };

// const myPoint: Point2 = { x: 1, y: 3 };

// // readonly 키워드
// type User = {
//     readonly id : number;
//     username : string;
// };

// const user: User = {
//     id : 123123,
//     username : "cat"
// };

// console.log(user.id);

// user.id = 1231231;
// // id값을 설정할 수 없다.



// type Circle = {
//     radius: number;
// };
// type Colorful = {
//     color: string;
// };

// type ColorfulCircle = Circle & Colorful;

// const happyFace: ColorfulCircle = {
//     radius : 4,
//     color : "yellow"
// };

// type Cat = {
//     numLives: number;
// };

// type Dog = {
//     breed: string;
// };

// type CatDog = Cat & Dog & {
//     age: number;
// };

// const christy:CatDog = {
//     numLives : 7,
//     breed : "Husky",
//     age : 9
// };

type Movie = {
    readonly title : string;
    originalTitle?: string;
    director : string;
    releaseYear : number;
    boxOffice : {
        budget : number;
        grossUs : number;
        grossWorldwide : number;
    }
}

const dune:Movie = {
    title : "Dune",
    originalTitle : "Dune Part One",
    director : "Denis Viee",
    releaseYear : 2021,
    boxOffice: {
        budget: 123123,
        grossUs: 3910938,
        grossWorldwide: 3453411152,
    },
};

const cats:Movie = {
    title : "Cats",
    director: "Tom Hooper",
    releaseYear : 2019,
    boxOffice: {
        budget : 789099,
        grossUs : 12355,
        grossWorldwide : 79871111944,
    },
};

function getProfit (x:Movie): number {
    let k = x.boxOffice.grossWorldwide - x.boxOffice.grossUs

    return k;
};

console.log("cat",getProfit(cats));

