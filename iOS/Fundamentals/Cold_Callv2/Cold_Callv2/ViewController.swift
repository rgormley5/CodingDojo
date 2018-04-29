//
//  ViewController.swift
//  Cold_Callv2
//
//  Created by Robert Gormley on 3/7/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var numLabel: UILabel!
    
    let countries = [("Ready?", "0"), ("Spain", "1"), ("England","2"), ("Jamaica", "3"), ("Cuba", "4"), ("Japan", "5"), ("Malawi", "6")]
    var counter = 0
    
    @IBAction func callButton(_ sender: UIButton) {
        counter = Int(arc4random_uniform(6)) + 1
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
        nameLabel.text = countries[counter].0
        numLabel.text = countries[counter].1
        
        switch counter {
        case 2:
            numLabel.textColor = UIColor.red
        case 3:
            numLabel.textColor = UIColor.blue
        case 4:
            numLabel.textColor = UIColor.green
        case 5:
            numLabel.textColor = UIColor.orange
        case 6:
            numLabel.textColor = UIColor.brown
        default:
            numLabel.textColor = UIColor.black
        }
        
        if counter == 0 {
            numLabel.isHidden = true
        } else {
            numLabel.isHidden = false
        }
    }

}

