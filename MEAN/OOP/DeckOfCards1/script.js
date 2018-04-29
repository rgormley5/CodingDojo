
class Deck {
    constructor() {
        this.deck = [];
    }
    create() {
        var suits = ['D', 'C', 'H', 'S'];
        var newCard = {};
        for (var i = 0; i < suits.length; i++) {
            for (var j = 1; j < 14; j++) {
                newCard = {
                    suit: suits[i],
                    value: j
                }
                this.deck.push(newCard);
            }
        }
        console.log(this.deck)
    }
    shuffle(arr) {
        var m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this.deck
    }
    deal(arr) {
        var topCard = this.deck.pop();
        console.log(topCard);
        return topCard;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    takeCard(deck) {
        if (deck instanceof Deck) {
            var yourCard = deck.deal()
            this.hand.push(yourCard);
            for (var i = 0; i < this.hand.length; i++) {
                console.log("Your cards are: " + this.hand[i])
            }
        }
    }
    discard() {
        var remove = this.hand.pop();
        console.log(remove);
    }
}

const x = new Deck();
x.create()
x.shuffle()
x.deal()
x.deal()

const y = new Player();
y.takeCard(x)
y.discard(this.hand)