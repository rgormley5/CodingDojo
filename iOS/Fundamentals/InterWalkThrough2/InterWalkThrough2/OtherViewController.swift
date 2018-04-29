//
//  OtherViewController.swift
//  InterWalkThrough2
//
//  Created by Robert Gormley on 3/12/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class OtherViewController: UIViewController {
    
    @IBOutlet weak var outputLabel: UILabel!
    var output: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        outputLabel.text = output
    }
    
    
    @IBAction func dismissButtonPressed(_ sender: UIButton) {
        dismiss(animated: true, completion: nil)
    }
    
}
