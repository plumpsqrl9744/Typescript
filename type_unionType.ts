
let age: number | string | boolean = 23;

age = 21;
age = "24";
age = true;


// 유니온 타입의 함수

function calculateTax(price : string | number, tax: number) {
    if (typeof price === "string") {
        price.replace("$","")
    }else {
        price * tax
    }
}

let array: number | string[] = [1,"as"]

array = 2
array = "as"
array = ["as"]



const array2: (number | string) [] = ["as", 1]