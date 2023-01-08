let highScore: number | boolean = true;
highScore = 1;

let stuff: number[] | string[] = ["a","1"]
stuff = [1,2,3]

let skillLevel: "Beginner" | "Intermediate" | "Advanced" 


type RGB = {
    r : number;
    g : number;
    b : number;
}

type HSL = {
    h : number;
    s : number;
    l : number;
}

let color: (RGB | HSL)[] = []


function greet(name: string | string[]) {
    if (typeof name === "string") {
        return `hi ${name}`
    }else{
        for(let i = 0; i < 3; i++) {
            return `hi ${name[i]}`
        }
    }
}

console.log(greet(["colt","blue","jangwoo"]))
greet("jangwoo")

