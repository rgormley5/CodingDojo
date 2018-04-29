//
//  ViewController.swift
//  InterWalkThrough2
//
//  Created by Robert Gormley on 3/12/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var enterTextField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! OtherViewController
        destination.output = enterTextField.text
    }

}

