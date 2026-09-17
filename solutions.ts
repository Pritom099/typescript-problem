// problem-1
function filterEvenNumbers(numbers: number[]):number[]{
    return numbers.filter(num => num % 2 === 0);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);


// problem-2
function reverseString(strings: string):string{
 return strings.split("").reverse().join("");
}
reverseString("typescript");


// problem-3
type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string{
 if(typeof value === "string"){
    return "String";
 }else{
    return "Number";
 }
}
checkType("Hello");
checkType(42);


// problem-4
const getProperty=<T>(userInfo: T, key:keyof T) => {
    return userInfo[key];
}
const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name");


// problem-5
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
function toggleReadStatus(){
    
}
toggleReadStatus(myBook);