import UIKit

struct Card {
    var Color: String
    var Roll: Int
}

class Deck {
    var cards: [Card]
    init() {
        self.cards = []
        for _ in 1...10 {
            let randInt = Int(arc4random_uniform(2) + 1)
            let createcard = Card(Color:"Blue", Roll: randInt)
            print(createcard)
            self.cards.append(createcard)
        }
        for _ in 1...10 {
            let randInt = Int(arc4random_uniform(2) + 3)
            let createcard = Card(Color:"Red", Roll: randInt)
            print(createcard)
            self.cards.append(createcard)
        }
        for _ in 1...10 {
            let randInt = Int(arc4random_uniform(2) + 5)
            let createcard = Card(Color:"Green", Roll: randInt)
            print(createcard)
            self.cards.append(createcard)
        }
        
    }
    func deal() -> Card? {
        let topcard = cards.popLast()
        print(topcard)
        return topcard
    }
    func isEmpty() -> Bool {
        return cards.count < 1
    }
    func shuffle() -> [Card]{
        let val1 = Int(arc4random_uniform(30))
        let val2 = Int(arc4random_uniform(30))
        let temp = cards[val1]
        cards[val1] = cards[val2]
        cards[val2] = temp
        return cards
    }
    
}

class Player {
    var name: String
    var hand: [Card]
    init(name: String) {
        self.name = name
        self.hand = []
    }
    func draw(deck: Deck) -> Card? {
        //if ... (need to unwrap)
        
        let drawcard = deck.deal()
    
        self.hand.append(drawcard)
        return drawcard
    }
    func rolldice() -> Int {
        return Int(arc4random_uniform(6) + 1)
    }
    func matchingCards(valc: String, valr: Int) -> Int {
        var counter: Int = 0
        for card in self.hand {
            if (card.Color == valc && card.Roll == valr) {
                counter += 1
            }
        }
        return counter
    }
}

let newdeck = Deck()
print(newdeck)
