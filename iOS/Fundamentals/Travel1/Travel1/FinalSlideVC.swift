//
//  FinalSlideVC.swift
//  Travel1
//
//  Created by Robert Gormley on 3/28/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class FinalSlideVC: UIViewController {

    var myImage: UIImage = UIImage(named: "three")!
    
    @IBOutlet weak var imageView: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        imageView.image = myImage
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}
