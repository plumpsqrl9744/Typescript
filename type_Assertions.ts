const mystery = "Hello World!!!";

console.log("first : ",mystery.length)

const mystery2:unknown = "Hello World!!!";

console.log("second : ",(mystery2 as string).length);



