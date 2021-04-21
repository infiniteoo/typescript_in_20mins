console.log('hello TypeScript!');

// Implicit Types
let helloWorld = "Hello, World!";

// Explicit Types
let firstName: string = "John";
let age: number = 30;

// Tuple
type stringAndNumber = [string, number];

let x: stringAndNumber = ["Hello", 10];

// Enums 
enum Continents { 
    North_America,
    South_America,
    Africa,
    Asia,
    Europe,
    Antartica,
    Australia
}

// usage
var region = Continents.Africa;

// Interface

