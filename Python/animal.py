class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def display_health(self):
        print "health: " + str(self.health)
        return self
    
class Dog(Animal):
    def __init__(self):
        super(Animal, self).__init__()
        self.health = 150

    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__(self):
        super(Animal, self).__init__()
        self.health = 170

    def fly():
        self.health -= 10

    def display_health(self):
        print "health: " + str(self.health) + "I am a dragon!"
        return self

class Flamingo(Animal):
    def __init__(self):
        super(Animal, self).__init__()
        self.health = 20
        

flam1 = Flamingo()
flam1.pet().display_health()


# dog1 = Dog()
# dog1.walk().walk().walk().run().run().pet().display_health()

# dragon1 = Dragon()
# dragon1.display_health()

# dog1 = Dog()
# dog1.fly().display_health()

