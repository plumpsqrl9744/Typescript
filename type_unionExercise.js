var highScore = true;
highScore = 1;
var stuff = ["a", "1"];
stuff = [1, 2, 3];
var skillLevel;
var color = [];
function greet(name) {
    if (typeof name === "string") {
        return "hi ".concat(name);
    }
    else {
        for (var i = 0; i < 3; i++) {
            return "hi ".concat(name[i]);
        }
    }
}
console.log(greet(["colt", "blue", "jangwoo"]));
greet("jangwoo");
