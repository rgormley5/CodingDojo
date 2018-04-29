
// Method1

// function personConstructor(name, age) {
    
//     const person = {};  // An object literal that will be reutrned at the end of this function
//     person.name = name;  // person attributes
//     person.age = age;

//     person.greet = function() {
//         console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");  // person method
//     }
//     return person;  // personConstructor function returns an instance (object literal)

// }

// const steve = personConstructor("Steve", 27);
// steve.greet();

// const emily = personConstructor("Emily", 28);
// emily.greet = function() {
//     console.log("Emily greets");
// };
// emily.greet();


// Method 2

// function personConstructor(name, age) {

//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("newnewnew!");
//     }

// }

// const newGirl = new personConstructor('newGirl', 33);
// // newGirl.greet();
// // console.log(newGirl);

// newGirl.greet = function() {
//     console.log("Changing this!!")
// }

// newGirl.greet()



// Private Variables

function Person(name, age) {  // This is defining the class
    const self = this;
    const privateVariable = "This variable is private";
    const privateMethod = function() {
        console.log("this is a private method for " + self.name)
        console.log(self);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Name: " + this.name + ", " + "Age: " + this.age);
        console.log("private variable is: " + privateVariable)
        privateMethod();
    }
}

const eliza = new Person("Eliza", 48);
eliza.greet();