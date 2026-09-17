TypeScript is designed to make our code safer by checking data types. But when we use any, TypeScript stops checking the type properly. That is why any is called a type safety hole.

let data: any = "Hello";
data.toUpperCase();
data.toFixed(); 

The second line can cause a runtime error because toFixed() is not a string method.
unknown is safer because TypeScript does not allow us to use the value directly until we check its type.
let data: unknown = "Hello";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

This process of checking a values type before using it is called type narrowing. So, unknown is a better choice when we are dealing with unpredictable data, such as API responses or user input.