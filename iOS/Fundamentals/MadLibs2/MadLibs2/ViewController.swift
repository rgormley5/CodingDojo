//
//  ViewController.swift
//  MadLibs2
//
//  Created by Robert Gormley on 3/14/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var textLabel: UILabel!
    var output:String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded")
        print("textLabel.text is: \(textLabel.text)")
        print("output is: \(output)")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    @IBAction func unwindSegue(_ segue: UIStoryboardSegue) {
        print("in unwindSegue")
        print("textLabel.text is: \(textLabel.text)")
        print("output is: \(output)")
        textLabel.text = output
    }
    
}

