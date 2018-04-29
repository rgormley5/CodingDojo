//
//  ViewController.swift
//  TTT
//
//  Created by Robert Gormley on 3/7/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var winnerLabel: UILabel!
    @IBOutlet weak var button1_outlet: UIButton!
    @IBOutlet weak var button2_outlet: UIButton!
    @IBOutlet weak var button3_outlet: UIButton!
    @IBOutlet weak var button4_outlet: UIButton!
    @IBOutlet weak var button5_outlet: UIButton!
    @IBOutlet weak var button6_outlet: UIButton!
    @IBOutlet weak var button7_outlet: UIButton!
    @IBOutlet weak var button8_outlet: UIButton!
    @IBOutlet weak var button9_outlet: UIButton!
    
    
    @IBAction func resetButton(_ sender: UIButton) {
        button1_outlet.backgroundColor = UIColor.black
        button2_outlet.backgroundColor = UIColor.black
        button3_outlet.backgroundColor = UIColor.black
        button4_outlet.backgroundColor = UIColor.black
        button5_outlet.backgroundColor = UIColor.black
        button6_outlet.backgroundColor = UIColor.black
        button7_outlet.backgroundColor = UIColor.black
        button8_outlet.backgroundColor = UIColor.black
        button9_outlet.backgroundColor = UIColor.black
        count = 0
        button1 = 0
        button2 = 0
        button3 = 0
        button4 = 0
        button5 = 0
        button6 = 0
        button7 = 0
        button8 = 0
        button9 = 0
        winnerLabel.isHidden = true
        list = ["row1": 0, "row2": 0, "row3": 0, "col1": 0, "col2": 0, "col3": 0, "dia1": 0, "dia2": 0]
    }
    
    var list: [String: Int] = ["row1": 0, "row2": 0, "row3": 0, "col1": 0, "col2": 0, "col3": 0, "dia1": 0, "dia2": 0]
    
    @IBAction func button1(_ sender: UIButton) {
        print("button \(sender.tag) pressed")
        if button1 != 1 {
            if count % 2 == 0 {
                button1_outlet.backgroundColor = UIColor.red
                list["row1"]! += 1
                list["col1"]! += 1
                list["dia1"]! += 1
            } else {
                button1_outlet.backgroundColor = UIColor.blue
                list["row1"]! -= 1
                list["col1"]! -= 1
                list["dia1"]! -= 1
            }
        }
        count += 1
        button1 = 1
        winning()
    }
    @IBAction func button2(_ sender: UIButton) {
        print("button \(sender.tag) pressed")
        if button2 != 1 {
            if count % 2 == 0 {
                button2_outlet.backgroundColor = UIColor.red
                list["row1"]! += 1
                list["col2"]! += 1
            } else {
                button2_outlet.backgroundColor = UIColor.blue
                list["row1"]! -= 1
                list["col2"]! -= 1
            }
        }
        count += 1
        button2 = 1
        winning()
    }
    @IBAction func button3(_ sender: UIButton) {
        print("button \(sender.tag) pressed")
        if button3 != 1 {
            if count % 2 == 0 {
                button3_outlet.backgroundColor = UIColor.red
                list["row1"]! += 1
                list["col3"]! += 1
                list["dia2"]! += 1
            } else {
                button3_outlet.backgroundColor = UIColor.blue
                list["row1"]! -= 1
                list["col3"]! -= 1
                list["dia2"]! -= 1
            }
        }
        count += 1
        button3 = 1
        winning()
    }
    @IBAction func button4(_ sender: UIButton) {
        print("button \(sender.tag) pressed")
        if button4 != 1 {
            if count % 2 == 0 {
                button4_outlet.backgroundColor = UIColor.red
                list["row2"]! += 1
                list["col1"]! += 1
            } else {
                button4_outlet.backgroundColor = UIColor.blue
                list["row2"]! -= 1
                list["col1"]! -= 1
            }
        }
        count += 1
        button4 = 1
        winning()
    }
    @IBAction func button5(_ sender: UIButton) {
        print("button \(sender.tag) pressed")
        if button5 != 1 {
            if count % 2 == 0 {
                button5_outlet.backgroundColor = UIColor.red
                list["row2"]! += 1
                list["col2"]! += 1
                list["dia1"]! += 1
                list["dia2"]! += 1
            } else {
                button5_outlet.backgroundColor = UIColor.blue
                list["row2"]! -= 1
                list["col2"]! -= 1
                list["dia1"]! -= 1
                list["dia2"]! -= 1
            }
        }
        count += 1
        button5 = 1
        winning()
    }
    @IBAction func button6(_ sender: UIButton) {
        print("button \(sender.tag) pressed")
        if button6 != 1 {
            if count % 2 == 0 {
                button6_outlet.backgroundColor = UIColor.red
                list["row2"]! += 1
                list["col3"]! += 1
            } else {
                button6_outlet.backgroundColor = UIColor.blue
                list["row2"]! -= 1
                list["col3"]! -= 1
            }
        }
        count += 1
        button6 = 1
        winning()
    }
    @IBAction func button7(_ sender: UIButton) {
        print("button \(sender.tag) pressed")
        if button7 != 1 {
            if count % 2 == 0 {
                button7_outlet.backgroundColor = UIColor.red
                list["row3"]! += 1
                list["col1"]! += 1
                list["dia2"]! += 1
            } else {
                button7_outlet.backgroundColor = UIColor.blue
                list["row3"]! -= 1
                list["col1"]! -= 1
                list["dia2"]! -= 1
            }
        }
        count += 1
        button7 = 1
        winning()
    }
    @IBAction func button8(_ sender: UIButton) {
        print("button \(sender.tag) pressed")
        if button8 != 1 {
            if count % 2 == 0 {
                button8_outlet.backgroundColor = UIColor.red
                list["row3"]! += 1
                list["col2"]! += 1
            } else {
                button8_outlet.backgroundColor = UIColor.blue
                list["row3"]! -= 1
                list["col2"]! -= 1
            }
        }
        count += 1
        button8 = 1
        winning()
    }
    @IBAction func button9(_ sender: UIButton) {
        print("button \(sender.tag) pressed")
        if button9 != 1 {
            if count % 2 == 0 {
                button9_outlet.backgroundColor = UIColor.red
                list["row3"]! += 1
                list["col3"]! += 1
                list["dia1"]! += 1
            } else {
                button9_outlet.backgroundColor = UIColor.blue
                list["row3"]! -= 1
                list["col3"]! -= 1
                list["dia1"]! -= 1
            }
        }
        count += 1
        button9 = 1
        winning()
    }
    
    var count = 0
    var button1 = 0
    var button2 = 0
    var button3 = 0
    var button4 = 0
    var button5 = 0
    var button6 = 0
    var button7 = 0
    var button8 = 0
    var button9 = 0
    
    func winning() {
        for i in list {
            if (i.value == 3) || (i.value == -3) {
                print("winner")
                if count % 2 == 0 {
                    winnerLabel.text = "Blue wins"
                } else {
                    winnerLabel.text = "Red wins"
                }
                winnerLabel.isHidden = false
            }
        }
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        button1_outlet.backgroundColor = UIColor.black
        button2_outlet.backgroundColor = UIColor.black
        button3_outlet.backgroundColor = UIColor.black
        button4_outlet.backgroundColor = UIColor.black
        button5_outlet.backgroundColor = UIColor.black
        button6_outlet.backgroundColor = UIColor.black
        button7_outlet.backgroundColor = UIColor.black
        button8_outlet.backgroundColor = UIColor.black
        button9_outlet.backgroundColor = UIColor.black
        winnerLabel.isHidden = true
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

