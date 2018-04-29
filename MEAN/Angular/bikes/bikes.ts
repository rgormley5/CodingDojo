class Bike {
    constructor(
        public price: number,
        public max_speed: number,
        public miles: number) { }
    display() {
        console.log("price is: ", this.price, "max_speed is: ", this.max_speed, "miles are: ", this.miles);
    }
    ride() {
        console.log("Riding");
        this.miles += 10;
    }
    reverse() {
        console.log("Reversing");
        this.miles -= 5;
    }
}

const shiny1 = new Bike(100, 10, 1);
shiny1.display();
shiny1.ride();
shiny1.display();
shiny1.reverse();
shiny1.display();