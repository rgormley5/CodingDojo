class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12

    def display_all(self):
        print "price: " + str(self.price)
        print "speed: " + str(self.speed)
        print "fuel: " + str(self.fuel)
        print "mileage: " + str(self.mileage)
        print "tax: " + str(self.tax)
        return self
    
car1 = Car(2000, "35pmh", "Full", "15mpg")
car2 = Car(2000, "5mph", "Full", "105mph")
car3 = Car(2000000, "1000mph", "Near Full", "33mph")
car1.display_all()
car2.display_all()
car3.display_all()
