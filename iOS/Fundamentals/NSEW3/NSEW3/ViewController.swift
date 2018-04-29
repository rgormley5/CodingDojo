//
//  ViewController.swift
//  NSEW3
//
//  Created by Robert Gormley on 3/13/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func buttonPressed(_ sender: UIButton) {
        performSegue(withIdentifier: "buttonSegue", sender: sender)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let otherViewController = segue.destination as! otherViewController
        if let button = (sender as? UIButton) {
            print("button is: \(button)")
            otherViewController.output = button.titleLabel?.text
            print("otherViewController.output is: \(otherViewController.output)")
        }
    }
    
    @IBAction func unwindSegue(_ sender: UIStoryboardSegue) {}


}

