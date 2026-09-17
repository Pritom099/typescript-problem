Generics allow us to write reusable code that can work with different types while still keeping type safety.

Without generics, we might need separate functions for different types:

function getNumber(value: number): number {
    return value;
}
function getString(value: string): string {
    return value;
}

With generics, we can use one function for both:

function getValue<T>(value: T): T {
    return value;
}
getValue(100);
getValue("Hello");

Here, T represents the type of the value. TypeScript automatically understands whether the value is a number, string, or another type.

Generics help us avoid code duplication, reuse the same logic, and maintain type safety. They are especially useful when building reusable functions, classes, and components.