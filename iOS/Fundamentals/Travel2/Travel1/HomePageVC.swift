//
//  HomePageVC.swift
//  Travel1
//
//  Created by Robert Gormley on 3/29/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class HomePageVC: UIViewController {
    
    var imageA: UIImage = UIImage(named: "a")!
    var imageB: UIImage = UIImage(named: "b")!
    var imageC: UIImage = UIImage(named: "c")!

    @IBOutlet weak var firstImageView: UIImageView!
    @IBOutlet weak var secondImageView: UIImageView!
    @IBOutlet weak var thirdImageView: UIImageView!
    @IBOutlet weak var fouthImageView: UIImageView!
    @IBOutlet weak var fifthImageView: UIImageView!
    @IBOutlet weak var sixthImageView: UIImageView!
    @IBOutlet weak var seventhImageView: UIImageView!
    @IBOutlet weak var eightImageView: UIImageView!
    @IBOutlet weak var ninthImageView: UIImageView!
    @IBOutlet weak var tenthImageView: UIImageView!
    @IBOutlet weak var eleventhImageView: UIImageView!
    @IBOutlet weak var twelthImageView: UIImageView!
    @IBOutlet weak var thirteenthImageView: UIImageView!
    @IBOutlet weak var fourteenthImageView: UIImageView!
    @IBOutlet weak var fifteenthImageView: UIImageView!
    @IBOutlet weak var sixteenthImageView: UIImageView!
    @IBOutlet weak var seventeenthImageView: UIImageView!
    @IBOutlet weak var eighteenthImageView: UIImageView!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        firstImageView.image = imageA
        secondImageView.image = imageB
        thirdImageView.image = imageC
        fouthImageView.image = imageA
        fifthImageView.image = imageB
        sixthImageView.image = imageC
        seventhImageView.image = imageA
        eightImageView.image = imageB
        ninthImageView.image = imageC
        tenthImageView.image = imageA
        eleventhImageView.image = imageB
        twelthImageView.image = imageC
        thirteenthImageView.image = imageA
        fourteenthImageView.image = imageB
        fifteenthImageView.image = imageC
        sixteenthImageView.image = imageA
        seventeenthImageView.image = imageB
        eighteenthImageView.image = imageC
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    

}
