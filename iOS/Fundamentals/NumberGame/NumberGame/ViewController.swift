//
//  ViewController.swift
//  NumberGame
//
//  Created by Robert Gormley on 3/11/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var numberLabel: UILabel!
    @IBOutlet weak var textInput: UITextField!
    @IBOutlet weak var messageLabel: UILabel!
    
    func randInt() -> Int {
        let randNum = Int(arc4random_uniform(100) + 1)
        print("randNum is \(randNum)")
        numberLabel.text = String(randNum)
        return randNum
    }

    @IBAction func buttonClicked(_ sender: UIButton) {
        print("textInput.text is: \(textInput.text!)")
        if Int(textInput.text!)! < randInt() {
            messageLabel.text = "too low"
        } else if Int(textInput.text!)! > randInt() {
            messageLabel.text = "too high"
        } else {
            messageLabel.text = "you win!  number is \(randInt())"
        }
        messageLabel.isHidden = false
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        randInt()
        messageLabel.isHidden = true
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

