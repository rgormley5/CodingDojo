//
//  JustBeastItVC.swift
//  ReBelt1
//
//  Created by Robert Gormley on 3/24/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class JustBeastItVC: UIViewController {
    
    var delegate: NewBeastDelegate?
    var indexPath: IndexPath?
    var item: String?

    @IBOutlet weak var textInput: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        textInput.text = item
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButton()
    }
    
    @IBAction func doneButtonPressed(_ sender: UIBarButtonItem) {
        let newText = textInput.text!
        print("done button pressed")
        print("newText is: \(newText)")
        delegate?.itemSaved(by: self, itemText: newText, at: indexPath)
    }
    

}
