//
//  ViewController.swift
//  Tipster
//
//  Created by Robert Gormley on 3/10/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet var buttons: [UIButton]!
    @IBOutlet weak var header_label: UILabel!
    @IBOutlet weak var header_num_label: UILabel!
    @IBOutlet weak var sub_num_label: UILabel!
    @IBOutlet weak var groupSizeNumberLabel: UILabel!
    
    
    @IBAction func reset_button(_ sender: UIButton) {
        header_label.text = ""
    }
    @IBAction func press1(_ sender: UIButton) {
        print("button 1 pressed")
        header_label.text = header_label.text! + String(sender.tag)
    }
    @IBAction func press2(_ sender: UIButton) {
        print("button 2 pressed")
        header_label.text = header_label.text! + String(sender.tag)
    }
    @IBAction func press3(_ sender: UIButton) {
        print("button 3 pressed")
        header_label.text = header_label.text! + String(sender.tag)
    }
    @IBAction func press4(_ sender: UIButton) {
        print("button 4 pressed")
        header_label.text = header_label.text! + String(sender.tag)
    }
    @IBAction func press5(_ sender: UIButton) {
        print("button 5 pressed")
        header_label.text = header_label.text! + String(sender.tag)
    }
    @IBAction func press6(_ sender: UIButton) {
        print("button 6 pressed")
        header_label.text = header_label.text! + String(sender.tag)
    }
    @IBAction func press7(_ sender: UIButton) {
        print("button 7 pressed")
        header_label.text = header_label.text! + String(sender.tag)
    }
    @IBAction func press8(_ sender: UIButton) {
        print("button 8 pressed")
        header_label.text = header_label.text! + String(sender.tag)
    }
    @IBAction func press9(_ sender: UIButton) {
        print("button 9 pressed")
        header_label.text = header_label.text! + String(sender.tag)
    }
    @IBAction func press0(_ sender: UIButton) {
        print("button 0 pressed")
        header_label.text = header_label.text! + "0"
    }
    @IBAction func pressDecimal(_ sender: UIButton) {
        print("decimal button pressed")
        header_label.text = header_label.text! + "."
    }
    
    
    @IBAction func tipSlider(_ sender: UISlider) {
        print("slider current value is: \(sender.value)")
        header_num_label.text = String(Double(header_label.text!)! * Double(sender.value))
    }
    
    @IBAction func groupSizeNumberSlider(_ sender: UISlider) {
        print("groupSizeNumberSlider value is \(sender.value)")
        groupSizeNumberLabel.text = String(Int(sender.value))
    }
    
    
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        header_label.text = ""
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

