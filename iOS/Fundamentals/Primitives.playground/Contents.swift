//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

struct Point {
    var X: Double
    var Y: Double
}

struct Line {
    var Start: Point
    var End: Point
    func Length() -> Double {
        let TempX: Double = End.X - Start.X
        let TempY: Double = End.Y - Start.Y
        let Len: Double = sqrt(pow(TempX, 2) + pow(TempY, 2))
        return Len
    }
}

let myLine = Line(Start: Point(X:1, Y:1), End: Point(X:2, Y:2))
myLine.Length()

struct Triangle {
    var Points: [Point]
//    func Area() -> Double {
//        let h: Double = Line.End.Y - Line.Start.Y
//        let b: Double = Line.End.X - Line.Start.X
//        let a: Double = (h*b)/2
//        return a
//    }
}

let myTriangle = Triangle(Points: [Point(X:0, Y:0), Point(X:2, Y:0), Point(X:0, Y:2)])
myTriangle.Area()
