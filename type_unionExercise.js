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
        for (var i = 0; i < name.length; i++) {
            return "hi ".concat(name[i]);
        }
    }
}
greet("jangwoo");
var color2 = [1, 2, 1];
color2.push(1);
color2.pop();
color2.pop();
color2.pop();
console.log(color2);
