import UIKit

class Animal {
    var name: String
    var health = 100
    init(name: String) {
        self.name = name
    }
    func displayHealth() -> String {
        return "health is: \(health)"
    }
}

class Cat: Animal {
    override init(name: String) {
        super.init(name: name)
        health = 150
    }
    func growl() {
        print("Rawr!")
    }
    func run() {
        print("Running")
        health -= 10
    }
}

class Cheetah: Cat {
    override func run() {
        print("Running Fast")
        health -= 50
    }
    func sleep() {
        if health < 200 {
            health += 50
        }
    }
}

class Lion: Cat {
    override func growl() {
        print("ROAR!!!! I am the King of the Jungle")
        }
    override init(name: String) {
        super.init(name: name)
        health = 200
    }
}


var newAnimal: Animal = Animal(name: "lala")
newAnimal.displayHealth()
var newCat: Cat = Cat(name: "mew")
newCat.growl()
newCat.run()
newCat.displayHealth()
var newCheetah: Cheetah = Cheetah(name: "chester")
newCheetah.run()
newCheetah.displayHealth()
