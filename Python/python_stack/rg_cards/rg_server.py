class Deck(object):
    def __init__(self):
        self.deck = []

    def create(self):
        suits = ['Diamond', 'Club', 'Heart', 'Spade']
        newcard = {}
        for i in range (0, 4):
            print "i is: ", i
            for j in range (1, 14):
                print "j is: ", j
                newcard = {suits[i], j}
                self.deck.append(newcard)
        print "about to return"
        return self

    # def show(self):
    #     print "{} of {}".format(self.value, self.suit)

    def draw(self):
        print "in deal"
        return self.deck.pop()

    def show(self):
        for c in self.deck:
            c.show()        

    def display(self):
        print "number of cards in this deck: ", len(self.deck)
        print "tuple cards in this deck: ", self.deck
        return self

# class Player(object):
#     def __init__(self, name):
#         self.name = name
#         self.hand = []


    # def shuffle(self):

# class Cards(object):
#     def __init__(self):
        # self.card = {}

        # self.value = ""
        # self.suit = ""



x = Deck()
# x.create().draw().display()
x.create().display()
x.draw()
x.show()


    