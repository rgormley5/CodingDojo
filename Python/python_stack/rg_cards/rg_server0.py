import random

class Deck(object):
    def __init__(self):
        self.deck = []

    def create_deck(self):
        suits = ["diamond", "club", "hearts", "spades"]
        for i in range (0, len(suits)):
            for j in range (1, 14):
                new_card = (suits[i], j)
                self.deck.append(new_card)
        return self

    def show(self):
        for i in self.deck:
            print "in display for: ", i
        return self

    def shuffle(self):
        random.shuffle(self.deck)
        print random.shuffle(self.deck)
        return self

    def draw(self):
        # self.deck.pop()
        # print self.deck.pop()
        return self.deck.pop()

class Card(object):
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit


    def show(self):
        print "value is: ", self.value
        print "suit is: ", self.suit
        return self

class Player(object):
    def __init__(self, name):
        self.name = name
        self.hand = []

    def draw_hand(self):
        # self.hand.append(deck1.draw)
        # print self.hand.append(deck1.draw())
        self.hand.append(deck1.draw())
        return self

    def show_hand(self):
        print "hand is: ", self.hand
        return self

# card1 = Card("jack", "spades")
# card1.show()

deck1 = Deck()
deck1.create_deck().shuffle().show()

player1 = Player("Name!")
player1.draw_hand().draw_hand().show_hand()