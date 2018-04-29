//
//  otherViewController.swift
//  NSEW3
//
//  Created by Robert Gormley on 3/13/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class otherViewController: UIViewController {

    @IBOutlet weak var destinationButton: UIButton!
    
    var output:String?

    override func viewDidLoad() {
        super.viewDidLoad()
        print("before, destinationButton is: \(destinationButton)")
        print("output is: \(output)")
        destinationButton.setTitle(output, for: .normal)
        print("after, destinationButton is: \(destinationButton)")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        
    }

}
