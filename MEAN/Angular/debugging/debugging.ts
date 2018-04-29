// 1. Problem

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 9;

// 1. Solution

var myString: string;
myString = "Bee stinger";
myString = "9";  // myString was set as a string, needs variable to be of type String

// 2. Problem

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHellocopy("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello(9));

 // 2. Solution

 function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 console.log(sayHello("Kermit"));
 console.log(sayHello("9"));  // sayHello takes a String as a parameter

 // 3. Problem

 function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));

 // 3. Solution

 function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 console.log(fullName("Mary", "Moore", "Tyler"));
 console.log(fullName("Jimbo", " ", "Jones"));  // all parameters are required

 // 4. Problem

 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belt: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));

 // 4. Solution

 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4                //  belts was mistyped.  it was "belt", needed to be "belts"
 }
 console.log(graduate(christine));
 console.log(graduate(jay));

 // 5. Problem

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = Ninja();
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));

 // 5. Solution

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 const shane = new Ninja("shane", "book");          // re-write these instantiations of Ninjas using Ninja class constructor
 const turing = new Ninja("Alan", "Turing");
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 console.log(study(turing));

 // 6. Problem

 var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = x,y => x * y;
// Nor is this working:
var math = (x, y) => let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];


// 6. Solution

var increment = x => x + 1;
console.log(increment(3));

var square = x => x * x;
console.log(square(4));

var multiply = (x, y) => x * y;
console.log(multiply(2, 2));

var math = (x, y) => {
    let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}
console.log(math(2,2))

// 7. Problem
class Elephant {
    constructor(public age: number){}
    birthday = function(){
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

// 7. Solution

class Elephant {
    constructor(public age: number){}
    birthday = () => {                  // birthday is a function that returns this.age++
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)