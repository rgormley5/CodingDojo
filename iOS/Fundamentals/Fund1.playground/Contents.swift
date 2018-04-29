//: Playground - noun: a place where people can play

import UIKit

var type: String = "Rectangle"
var description: String = "A quadtilateral with four right angles"
var width: Int = 5
var height: Double = 10.5
var area: Double = Double(width) * height
height += 1
width += 1
area = Double(width) * height
print("The shape is a \(type) or \(description) with an area of \(area)")
