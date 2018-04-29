class Store(object):
    def __init__(self, products, location, owner):
        self.products = []
        self.location = location
        self.owner = owner

    def inventory(self):
        print "products: " + str(self.products)
        print "location: " + str(self.location)
        print "owner: " + str(self.owner)
        return self
    
    def add_products(self, string):
        self.products.append(string)
        return self

    # def remove_products(self, string):
    #     # go through array
    #     # find string
    #     # remove string
    #     # return array
    #     self.products.    

new1 = Store(["things"], "location", "owner")
new1.add_products("apple").inventory()
new1.inventory()