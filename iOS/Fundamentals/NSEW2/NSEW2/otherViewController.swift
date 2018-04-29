//
//  otherViewController.swift
//  NSEW2
//
//  Created by Robert Gormley on 3/13/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class otherViewController: UIViewController {

    @IBOutlet weak var goBackButton: UIButton!
    
    var output:String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        goBackButton.setTitle(output, for: .normal)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }


}
