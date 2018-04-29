//
//  ViewController.swift
//  NSEW2
//
//  Created by Robert Gormley on 3/13/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    

    @IBAction func buttonPressed(_ sender: UIButton) {
        performSegue(withIdentifier: "buttonSegue", sender: sender)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let otherViewController = segue.destination as! otherViewController
        if let button = (sender as? UIButton) {
            otherViewController.output = button.titleLabel?.text
        }
    }
    
    @IBAction func unwindSegue(_ sender: UIStoryboardSegue) {
        print("this is unwinding")
    }
}

