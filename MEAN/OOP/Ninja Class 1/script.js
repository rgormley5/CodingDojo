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
};

const newNinja1 = new Ninja("Donatello");
newNinja1.showStats();
newNinja1.drinkSake();
newNinja1.showStats();
