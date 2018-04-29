class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Name is: " + this.name);
    }
    showStats() {
        console.log("Name is: " + this.name + " Health is: " + this.health + " Speed is: " + this.speed + " Strength is: " + this.strength)
    }
    drinkSake() {
        this.health += 10;
        console.log(this.name + " added +10 health!")
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("Wise message")
    }
}

// const ninja1 = new Ninja("blueNinja")
// ninja1.showStats()
// ninja1.drinkSake()
// ninja1.showStats()

const sensei1 = new Sensei("wiseSensei")
sensei1.showStats()
sensei1.speakWisdom()