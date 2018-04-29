function Ninja(name) {
    this.name = name;
    this.health = 100;
    const speed = 3;
    const strength = 3;
    this.sayName = function() {
        console.log("Name is: " + this.name);
    };
    this.showStats = function() {
        console.log("Name is: " + this.name + " Health is: " + this.health + " Strength is: " + strength + " Speed is: " + speed);
    };
    this.drinkSake = function() {
        console.log("health is: " + this.health);
        this.health += 10;
    };
    this.punch = function(test) {
        if (test instanceof Ninja) {
            console.log(Ninja.name + " was punched by " + this.name);
            Ninja.health -= 5;
        };
    };
    this.kick = function(test) {
        console.log(test instanceof Ninja);
        if (test instanceof Ninja) {
            console.log(test.name + " was kicked by " + this.name);
            test.health -= 15;
        };
    };
};

const ninja1 = new Ninja("Donatello");
const ninja2 = new Ninja("Leonardo");
ninja1.showStats();
ninja2.showStats();
ninja1.punch(ninja2);
ninja2.showStats();
ninja2.kick(ninja1);
ninja1.showStats();
console.log(ninja1 instanceof Ninja)