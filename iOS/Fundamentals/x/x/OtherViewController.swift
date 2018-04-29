//
//  OtherViewController.swift
//  x
//
//  Created by Robert Gormley on 3/26/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class OtherViewController: UIViewController {
    
    var delegate: NewItemDelegate?

    @IBOutlet weak var textInput: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()

    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed()
    }
    
    @IBAction func saveButtonPressed(_ sender: UIBarButtonItem) {
        let itemText = textInput.text!
        delegate?.itemSaved(by: self, itemText: itemText)
    }
    
    
}
