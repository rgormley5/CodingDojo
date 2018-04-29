//
//  ViewController.swift
//  Cold_Callv1
//
//  Created by Robert Gormley on 3/7/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var nameLabel: UILabel!
    
    let list = ["Harry Potter", "Nagini", "Tom Riddle's Diary", "Marvolo Gaunt's Ring", "Salazar Slytherin's Locket", "Helga Hufflepuff's Cup", "Rowena Ravenclaw's Diadem", "Quirinus Quirrell"]
    var current = 0
    
    @IBAction func callButton(_ sender: UIButton) {
        print("Cold Call button pressed")
        if current < 7 {
            current += 1
        } else {
            current = 0
        }
        print("current value is: \(current)")
        updateUI()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        updateUI()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    func updateUI() {
        nameLabel.text = list[current]
    }

}

