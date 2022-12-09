type Point = {
    x: number;
    y: number;
}
// type alias

let number: Point = { x: 34, y: 2 };

function randomCoordinete(): Point {
    return { x: Math.random(), y: Math.random()};
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.x * 2 };
}

type MyNum = number;
let age: MyNum = 123123;
// 객체 타입 뿐만 아니라 원시 타입도 가능하다!


// Nested Object

type Song = {
    title : string;
    artist: string;
    numStreams : number;
    credits : {
        producer : string;
        writer : string;
    };
};

function calculatePayout(song : Song): number{
   return song.numStreams * 0.0033;
};

function printSong(song : Song): void{
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title : "unchained Melody",
    artist : "Right",
    numStreams : 123123,
    credits : {
        producer : "Phil Spector",
        writer : "Alex North"
    }
}

console.log(calculatePayout(mySong))

printSong(mySong)