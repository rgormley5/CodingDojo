//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

func flip() {
    print("Tossing a Coin!")
    var coin_val = Int(arc4random_uniform(2))
    print("coin_val is \(coin_val)")
    if coin_val == 0 {
        return print("coin_val is a heads")
    } else {
        return print("coin_val is a tails")
    }
}

func tossMultipleCoins(val: Int) {
    for i in 1...val {
        let result = flip()
        print(result)
//        if result == "coin_val is a heads" {
//
//        }
    }
}
tossMultipleCoins(val: 2)
