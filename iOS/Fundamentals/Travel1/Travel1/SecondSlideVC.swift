//
//  SecondSlideVC.swift
//  Travel1
//
//  Created by Robert Gormley on 3/28/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class SecondSlideVC: UIViewController {
    
    @IBOutlet weak var imageView: UIImageView!
    
    var myImage: UIImage = UIImage(named: "two")!

    override func viewDidLoad() {
        super.viewDidLoad()
        imageView.image = myImage
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func unwindToSecond(_ sender: UIStoryboardSegue) {
        
    }

}
