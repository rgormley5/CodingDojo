class Product(object):
    def __init__(self, price, item_name, weight, brand):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = "for sale"
    
    def display_all(self):
        print "price: " + str(self.price)
        print "item name: " + str(self.item_name)
        print "weight: " + str(self.weight)
        print "brand: " + str(self.brand)
        print "status: " + str(self.status)

    def sell(self):
        self.status = "sold"
        return self

    def add_tax(self, tax):
        self.price += self.price * tax
        return self

    def Return(self, reason):
        if reason == "defective":
            self.status = "defective"
            self.price = 0
        elif reason == "box":
            self.status = "for sale"
        elif reason == "used":
            self.status = "used"
            self.price -= self.price * 0.20
        return self
        

new1 = Product(20, "apple", "0.5g", "nice brand")
new1.Return("used").display_all()