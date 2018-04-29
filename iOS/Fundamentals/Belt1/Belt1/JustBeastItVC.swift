//
//  JustBeastItVC.swift
//  Belt1
//
//  Created by Robert Gormley on 3/23/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class JustBeastItVC: UIViewController {
    
    @IBOutlet weak var itemInput: UITextField!
    
    var delegate: AddBeastDelegate?
    var indexPath: IndexPath?
    var item: String?

    override func viewDidLoad() {
        super.viewDidLoad()
        print("JustBeastItVC Loaded")
        self.title = "Just Beast It"
        itemInput.text = item
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        print("Cancel button pressed")
        delegate?.cancelButtonPressed(by: self)
    }
    
    @IBAction func doneButtonPressed(_ sender: UIBarButtonItem) {
        print("Done button pressed")
        let itemText = itemInput.text!
        print("itemText is: \(itemText)")
        delegate?.itemSaved(by: self, itemText: itemText, at: indexPath)
    }
    
    
    

}
