// type Point = {
//     x: number;
//     y: number;
// }
// // type alias
var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Viee",
    releaseYear: 2021,
    boxOffice: {
        budget: 123123,
        grossUs: 3910938,
        grossWorldwide: 3453411152
    }
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 789099,
        grossUs: 12355,
        grossWorldwide: 79871111944
    }
};
function getProfit(x) {
    var k = x.boxOffice.grossWorldwide - x.boxOffice.grossUs;
    return k;
}
;
console.log("cat", getProfit(cats));
