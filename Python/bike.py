class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
        self.total_miles = 0

    def displayInfo(self):
        print "price is: " + str(self.price)
        print "max speed is: " + str(self.max_speed)
        if self.total_miles < 0:
            print "total miles is 0"
        else:
            print "total miles is: " + str(self.total_miles)
        return self

    def ride(self):
        print "Riding"
        self.total_miles += 10
        return self

    def reverse(self):
        print "Reversing"
        self.total_miles -= 5
        return self

bike1 = Bike(200, "25mph")
bike2 = Bike(200, "25mph")
bike3 = Bike(200, "25mph")
bike1.ride().ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()
