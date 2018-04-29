//
//  FirstSlideVC.swift
//  Travel1
//
//  Created by Robert Gormley on 3/28/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class FirstSlideVC: UIViewController {

    @IBOutlet weak var imageView: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        addImageToView()
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func unwindToFirstSlide(_ sender: UIStoryboardSegue) {
        
    }
    
    func addImageToView() {
        let myImage: UIImage = UIImage(named: "one")!
        imageView.image = myImage
    }

}
