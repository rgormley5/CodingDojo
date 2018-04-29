class Deck(object):
    def __init__(self):
        self.allcards = []
        self.create()

    def create(self):
        suits = ["clubs", "diamonds", "hearts", "spades"]
        for i in range (0, 4):
            for j in range (1, 14):
                newCard = Card(suits[i], j)
                self.allcards.append(newCard)

class Card(object):
    def __init__(self, suits, pips):
        self.suits = suits
        self.pips = pips

# class Person(object):
#     def __init__(self):

new1 = Deck()
print new1