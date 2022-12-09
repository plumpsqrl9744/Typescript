// type alias
var number = { x: 34, y: 2 };
function randomCoordinete() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.x * 2 };
}
var age = 123123;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
;
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "unchained Melody",
    artist: "Right",
    numStreams: 123123,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
console.log(calculatePayout(mySong));
printSong(mySong);
