//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

var list: [UInt32] = []
for i in 1...100{
    list.append(UInt32(i))
}
print(list)

for i in 1..<list.count {
    var val1 = Int(arc4random_uniform(100))
    var val2 = Int(arc4random_uniform(100))
    var temp = list[val1]
    list[val1] = list[val2]
    list[val2] = temp
    if list[i] == 42 {
        list.remove(at: Int(list[i]))
        print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index")
    }
}
print(list)
